import csv
import xml.etree.ElementTree as ET
from datetime import datetime


def write_vcf_file(variants_query, output_file):
    # VCF header
    header = [
        '##fileformat=VCFv4.2',
        f'##fileDate={datetime.now().strftime("%Y%m%d")}',
        f'##reference={""}',
        '##INFO=<ID=DP,Number=1,Type=Integer,Description="Total Depth">',
        '##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">',
        '##FORMAT=<ID=AD,Number=R,Type=Integer,Description="Allele Depth">',
        '##FORMAT=<ID=DP,Number=1,Type=Integer,Description="Read Depth">'
        '##INFO=<ID=AF,Number=A,Type=Float,Description="Allele Frequency">',
        '#CHROM\tPOS\tID\tREF\tALT\tQUAL\tFILTER\tINFO\tFORMAT\t'
    ]

    with open(output_file, 'w', newline='') as f:
        # Write header
        for line in header:
            f.write(line + '\n')

        # Write variant data
        writer = csv.writer(f, delimiter='\t')
        for variant in variants_query:
            row = [
                variant['display_name'],
                variant['category'],
                variant['rank_score'],
                variant['variant_rank'],
                variant['cadd_score'],
                variant['hgnc_symbols'],
            ]

            writer.writerow(row)


def create_xml_file():
    # Create the root element
    root = ET.Element("root")

    # Create child elements
    child1 = ET.SubElement(root, "child1")
    child1.text = "This is child 1"
    child2 = ET.SubElement(root, "child2")
    child2.text = "This is child 2"

    # Create the tree and write to file
    tree = ET.ElementTree(root)
    tree.write("output.xml", encoding="utf-8", xml_declaration=True)
