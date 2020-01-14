import logging

from scout.constants import CONSERVATION
import numbers

LOG = logging.getLogger(__name__)

def parse_conservations(variant, vep_header=[]):
    """Parse the conservation predictors

        Args:
            variant(dict): A variant dictionary
            vep_header(list): CSQ field might contain conservation annotations

        Returns:
            conservations(dict): A dictionary with the conservations
    """
    conservations = {}

    conservation_keys = {
        'info_keys' : {
            'gerp' : 'dbNSFP_GERP___RS',
            'phast' : 'dbNSFP_phastCons100way_vertebrate',
            'phylop' : 'dbNSFP_phyloP100way_vertebrate'
        },
        'csq_keys' : {
            'gerp' : 'GERP++_RS',
            'phast' : 'phastCons100way_vertebrate',
            'phylop' : 'phyloP100way_vertebrate'
        }
    }
    vep_info = variant.INFO.get('CSQ')

    # if CSQ field contains any conservation key specified in conservation_keys['csq_keys']
    if any(elem in list(conservation_keys['csq_keys'].values()) for elem in vep_header):

        raw_transcripts = list(dict(zip(vep_header, transcript_info.split('|')))
                           for transcript_info in vep_info.split(','))

        for key,value in conservation_keys['csq_keys'].items():
            conservations[key] = parse_conservation_csq(raw_transcripts, value, key)


    else: # parse conservation from the INFO field
        for key,value in conservation_keys['info_keys'].items():
            conservations[key] = parse_conservation_info(variant, value, key)

    return conservations


def parse_conservation_info(variant, info_key, field_key):
    """Get the conservation prediction from the INFO field

        Args:
            variant(dict): A variant dictionary
            info_key(str): 'dbNSFP_GERP___RS', 'dbNSFP_phastCons100way_vertebrate' or
                'phyloP100way_vertebrate'
            field_key(str): 'gerp', 'phast' or 'phylop'

        Returns:
            conservations(list): List of censervation terms
    """
    raw_score = variant.INFO.get(info_key)
    conservations = []

    if raw_score:
        if isinstance(raw_score, numbers.Number):
            raw_score = (raw_score,)

        for score in raw_score:
            if score >= CONSERVATION[field_key]['conserved_min']:
                conservations.append('Conserved')
            else:
                conservations.append('NotConserved')

    return conservations


def parse_conservation_csq(raw_transcripts, csq_key, field_key):
    """Get the conservation prediction from the CSQ field

        Args:
            raw_transcripts(generator): raw transcripts from CSQ field
            csq_key(str): 'GERP++_RS', 'phastCons100way_vertebrate' or 'phyloP100way_vertebrate'
            field_key(str): 'gerp', 'phast' or 'phylop'

        Returns:
            conservations(list): List of censervation terms
    """
    conservations = []
    conservations_anno = set() # do not include duplicated values

    for raw_transcript in raw_transcripts:
        try:
            scores = raw_transcript.get(csq_key)
            for score in scores.split('&'): # fiels may consist of multiple numeric values
                conservations_anno.add(float(score))
        except ValueError :
            LOG.warning('Error while parsing {} value:{} '.format(field_key,raw_transcript.get(csq_key)))
            continue

    for score in conservations_anno:
        if score >= CONSERVATION[field_key]['conserved_min']:
            conservations.append('Conserved')
        else:
            conservations.append('NotConserved')

    return conservations
