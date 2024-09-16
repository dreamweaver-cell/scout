const data = [
    {
        name: "Adrenal Gland (ADRENAL_GLAND)",
        children: [
            { name: "Adrenal Gland Cancer" },
            {
                name: "Adrenocortical Adenoma (ACA)",
                children: [
                    { name: "Adrenocortical Adenoma" }
                ]
            },
            {
                name: "Adrenocortical Carcinoma (ACC)",
                children: [
                    { name: "Adrenocortical Carcinoma" }
                ]
            },
            {
                name: "Pheochromocytoma (PHC)",
                children: [
                    { name: "Pheochromocytoma" }
                ]
            }
        ]
    },
    {
        name: "Ampulla of Vater (AMPULLA_OF_VATER)",
        children: [
            { name: "Ampullary Carcinoma" },
            {
                name: "Ampullary Carcinoma (AMPCA)",
                children: [
                    { name: "Ampullary Cancer" },
                    {
                        name: "Intestinal Ampullary Carcinoma (IAMPCA)",
                        children: [
                            { name: "Ampullary Cancer" }
                        ]
                    },
                    {
                        name: "Mixed Ampullary Carcinoma (MAMPCA)",
                        children: [
                            { name: "Ampullary Cancer" }
                        ]
                    },
                    {
                        name: "Pancreatobiliary Ampullary Carcinoma (PAMPCA)",
                        children: [
                            { name: "Ampullary Cancer" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Biliary Tract (BILIARY_TRACT)",
        children: [
        		{ name: "Biliary Tract Cancer",	color: "Green",	code1: "C12678",	code2: "C0005423" },
            {

                name: "Intracholecystic Papillary Neoplasm (ICPN)",
                children: [
                    { name: "Hepatobiliary Cancer" },
                    {
                        name: "Gallbladder Cancer (GBC)",
                        children: [
                            { name: "Adenosquamous Carcinoma of the Gallbladder (GBASC)" },
                            { name: "Gallbladder Adenocarcinoma, NOS (GBAD)" },
                            { name: "Small Cell Gallbladder Carcinoma (SCGBC)" }
                        ]
                    }
                ]
            },
            {
                name: "Intraductal Papillary Neoplasm of the Bile Duct (IPN)",
                children: [
                    {
                        name: "Cholangiocarcinoma (CHOL)",
                        children: [
                            { name: "Extrahepatic Cholangiocarcinoma (EHCH)" },
                            { name: "Intrahepatic Cholangiocarcinoma (IHCH)" },
                            { name: "Perihilar Cholangiocarcinoma (PHCH)" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Bladder/Urinary Tract (BLADDER)",
        children: [
         		{ name: "Bladder/Urinary Tract Cancer", color: "Yellow", code1: "C12414", code2: "C0005682" },
            { name: "Bladder Adenocarcinoma (BLAD)" },
            { name: "Bladder Squamous Cell Carcinoma (BLSC)" },
            { name: "Bladder Urothelial Carcinoma (BLCA)" },
            { name: "Inflammatory Myofibroblastic Bladder Tumor (IMTB)" },
            { name: "Inverted Urothelial Papilloma (IUP)" },
            { name: "Mucosal Melanoma of the Urethra (URMM)" },
            { name: "Plasmacytoid/Signet Ring Cell Bladder Carcinoma (SRCBC)" },
            { name: "Sarcomatoid Carcinoma of the Urinary Bladder (SCB)" },
            { name: "Small Cell Bladder Cancer (SCBC)" },
            { name: "Upper Tract Urothelial Carcinoma (UTUC)" },
            {
                name: "Urachal Carcinoma (URCA)",
                children: [
                    { name: "Urachal Adenocarcinoma (UA)" }
                ]
            },
            {
                name: "Urethral Cancer (UCA)",
                children: [
                    { name: "Urethral Adenocarcinoma (UAD)" },
                    { name: "Urethral Squamous Cell Carcinoma (USCC)" },
                    { name: "Urethral Urothelial Carcinoma (UCU)" }
                ]
            },
            { name: "Urothelial Papilloma (UPA)" }
        ]
    },
    {
        name: "Bone (BONE)",
        children: [
            { name: "Bone Cancer (BONE)", color: "White", code1: "C12366", code2: "C0262950" },
            {
                name: "Adamantinoma (ADMA)",
                color: "White"
            },
            {
                name: "Chondroblastoma (CHBL)",
                color: "White",
                code1: "C2945",
                code2: "C0008441"
            },
            {
                name: "Chondrosarcoma (CHS)",
                color: "White",
                code1: "C2946",
                code2: "C0008479",
                children: [
                    {
                        name: "Dedifferentiated Chondrosarcoma (DDCHS)",
                        color: "White",
                        code1: "C6476",
                        code2: "C0862878"
                    },
                    {
                        name: "Extraskeletal Myxoid Chondrosarcoma (EMCHS)",
                        color: "White",
                        code1: "C27502",
                        code2: "C1275278"
                    },
                    {
                        name: "Mesenchymal Chondrosarcoma (MCHS)",
                        color: "White",
                        code1: "C53493",
                        code2: "C1708980"
                    },
                    {
                        name: "Myxoid Chondrosarcoma (MYCHS)",
                        color: "White",
                        code1: "C4303",
                        code2: "C0334551"
                    }
                ]
            },
            {
                name: "Chordoma (CHDM)",
                color: "White",
                code1: "C2947",
                code2: "C0008487",
                children: [
                    {
                        name: "Conventional Type Chordoma (CCHDM)",
                        color: "White"
                    },
                    {
                        name: "Dedifferentiated Chordoma (DDCHDM)",
                        color: "White",
                        code1: "C48876",
                        code2: "C1266174"
                    }
                ]
            },
            {
                name: "Ewing Sarcoma (ES)",
                color: "White",
                code1: "C4817",
                code2: "C0553580"
            },
            {
                name: "Giant Cell Tumor of Bone (GCTB)",
                color: "White",
                code1: "C121932",
                code2: "C0206638"
            },
            {
                name: "Osteosarcoma (OS)",
                color: "White",
                code1: "C9145",
                code2: "C0029463",
                children: [
                    {
                        name: "Chondroblastic Osteosarcoma (CHOS)",
                        color: "White",
                        code1: "C4021",
                        code2: "C0279603"
                    },
                    {
                        name: "Fibroblastic Osteosarcoma (FIOS)",
                        color: "White",
                        code1: "C4020",
                        code2: "C0279602"
                    },
                    {
                        name: "High-Grade Surface Osteosarcoma (HGSOS)",
                        color: "White",
                        code1: "C53958",
                        code2: "C1266165"
                    },
                    {
                        name: "Low-Grade Central Osteosarcoma (LGCOS)",
                        color: "White",
                        code1: "C6474",
                        code2: "C1266163"
                    },
                    {
                        name: "Osteoblastic Osteosarcoma (OSOS)",
                        color: "White",
                        code1: "C53953",
                        code2: "C1704328"
                    },
                    {
                        name: "Parosteal Osteosarcoma (PAOS)",
                        color: "White",
                        code1: "C8969",
                        code2: "C0206642"
                    },
                    {
                        name: "Periosteal Osteosarcoma (PEOS)",
                        color: "White",
                        code1: "C8970",
                        code2: "C1377843"
                    },
                    {
                        name: "Secondary Osteosarcoma (SECOS)",
                        color: "White",
                        code1: "C53704",
                        code2: "C1710042"
                    },
                    {
                        name: "Small Cell Osteosarcoma (SCOS)",
                        color: "White",
                        code1: "C4023",
                        code2: "C0279622"
                    },
                    {
                        name: "Telangiectatic Osteosarcoma (TEOS)",
                        color: "White",
                        code1: "C3902",
                        code2: "C0259782"
                    }
                ]
            }
        ]
    },
    {
        name: "Bowel (BOWEL)",
        children: [
            { name: "Bowel Cancer (BOWEL)", color: "SaddleBrown", code1: "C12736", code2: "C0021853" },
            {
                name: "Anal Gland Adenocarcinoma (AGA)",
                color: "SaddleBrown",
                code1: "C5609",
                code2: "C1266027"
            },
            {
                name: "Anal Squamous Cell Carcinoma (ANSC)",
                color: "SaddleBrown",
                code1: "C9161",
                code2: "C1412036"
            },
            {
                name: "Anorectal Mucosal Melanoma (ARMM)",
                color: "SaddleBrown",
                code1: "C4639",
                code2: "C0349538"
            },
            {
                name: "Appendiceal Adenocarcinoma (APAD)",
                color: "SaddleBrown",
                code1: "C7718",
                code2: "C0238003",
                children: [
                    {
                        name: "Colonic Type Adenocarcinoma of the Appendix (CTAAP)",
                        color: "SaddleBrown"
                    },
                    {
                        name: "Goblet Cell Adenocarcinoma of the Appendix (GCCAP)",
                        color: "SaddleBrown",
                        code2: "C0205695"
                    },
                    {
                        name: "Mucinous Adenocarcinoma of the Appendix (MAAP)",
                        color: "SaddleBrown",
                        code1: "C43558",
                        code2: "C1706832"
                    },
                    {
                        name: "Signet Ring Cell Type of the Appendix (SRAP)",
                        color: "SaddleBrown",
                        code1: "C43554",
                        code2: "C1711320"
                    }
                ]
            },
            {
                name: "Colorectal Adenocarcinoma (COADREAD)",
                color: "SaddleBrown",
                code1: "C5105",
                code2: "C1319315",
                children: [
                    {
                        name: "Colon Adenocarcinoma (COAD)",
                        color: "SaddleBrown",
                        code1: "C4349",
                        code2: "C0338106"
                    },
                    {
                        name: "Colon Adenocarcinoma In Situ (CAIS)",
                        color: "SaddleBrown"
                    },
                    {
                        name: "Mucinous Adenocarcinoma of the Colon and Rectum (MACR)",
                        color: "SaddleBrown",
                        code1: "C43585",
                        code2: "C1707439"
                    },
                    {
                        name: "Rectal Adenocarcinoma (READ)",
                        color: "SaddleBrown",
                        code1: "C9383",
                        code2: "C0149978"
                    },
                    {
                        name: "Signet Ring Cell Adenocarcinoma of the Colon and Rectum (SRCCR)",
                        color: "SaddleBrown",
                        code1: "C9168,C7967",
                        code2: "C0279654,C1707436"
                    }
                ]
            },
            {
                name: "Gastrointestinal Neuroendocrine Tumors (GINET)",
                color: "SaddleBrown",
                code1: "C95404",
                code2: "C2987127",
                children: [
                    {
                        name: "High-Grade Neuroendocrine Carcinoma of the Colon and Rectum (HGNEC)",
                        color: "SaddleBrown",
                        code1: "C96156",
                        code2: "C3272607"
                    },
                    {
                        name: "Small Bowel Well-Differentiated Neuroendocrine Tumor (SBWDNET)",
                        color: "SaddleBrown",
                        code1: "C9461",
                        code2: "C1332564"
                    },
                    {
                        name: "Well-Differentiated Neuroendocrine Tumor of the Appendix (AWDNET)",
                        color: "SaddleBrown",
                        code1: "C96422",
                        code2: "C3272767"
                    },
                    {
                        name: "Well-Differentiated Neuroendocrine Tumor of the Rectum (RWDNET)",
                        color: "SaddleBrown",
                        code1: "C96159",
                        code2: "C3272610"
                    }
                ]
            },
            {
                name: "Low-grade Appendiceal Mucinous Neoplasm (LAMN)",
                color: "SaddleBrown"
            },
            {
                name: "Medullary Carcinoma of the Colon (CMC)",
                color: "SaddleBrown",
                code1: "C60641",
                code2: "C1880119"
            },
            {
                name: "Small Bowel Cancer (SBC)",
                color: "SaddleBrown",
                code1: "C7724",
                code2: "C0238196",
                children: [
                    {
                        name: "Duodenal Adenocarcinoma (DA)",
                        color: "SaddleBrown",
                        code1: "C7889",
                        code2: "C0278804"
                    }
                ]
            },
            {
                name: "Small Intestinal Carcinoma (SIC)",
                color: "SaddleBrown",
                code1: "C7724",
                code2: "C0238196"
            },
            {
                name: "Tubular Adenoma of the Colon (TAC)",
                color: "SaddleBrown"
            }
        ]
    },
    {
        name: "Breast (BREAST)",
        children: [
            { name: "Breast Cancer", color: "HotPink", code1: "C12971", code2: "C0006141" },
            { name: "Adenomyoepithelioma of the Breast (BRAME)", color: "HotPink", code1: "C6899", code2: "C1510795" },
            { name: "Breast Ductal Carcinoma In Situ (DCIS)", color: "HotPink", code1: "C2924", code2: "C0007124" },
            {
                name: "Breast Ductal Carcinoma In Situ (DCIS)",
                children: [
                    { name: "Paget Disease of the Nipple (PD)", color: "HotPink", code1: "C3301", code2: "C1704323" }
                ]
            },
            {
                name: "Breast Fibroepithelial Neoplasms (BFN)",
                color: "HotPink",
                code1: "C40405",
                code2: "C1511309",
                children: [
                    { name: "Fibroadenoma (FA)", color: "HotPink", code1: "C3744", code2: "C0206650" },
                    {
                        name: "Phyllodes Tumor of the Breast (PT)",
                        children: [
                            { name: "Benign Phyllodes Tumor of the Breast (BPT)", color: "HotPink", code1: "C5196", code2: "C1332533" },
                            { name: "Borderline Phyllodes Tumor of the Breast (BLPT)", color: "HotPink", code1: "C5316", code2: "C1332592" },
                            { name: "Malignant Phyllodes Tumor of the Breast (MPT)", color: "HotPink", code1: "C4504", code2: "C0346154" }
                        ]
                    }
                ]
            },
            { name: "Breast Lobular Carcinoma In Situ (LCIS)", color: "HotPink", code1: "C4018", code2: "C0279563" },
            { name: "Breast Neoplasm, NOS (BNNOS)", color: "HotPink" },
            { name: "Breast Sarcoma (PBS)", color: "HotPink", code1: "C4670", code2: "C0349667" },
            {
                name: "Breast Sarcoma (PBS)",
                children: [
                    { name: "Breast Angiosarcoma (BA)", color: "HotPink", code1: "C5184", code2: "C1332614" }
                ]
            },
            { name: "Inflammatory Breast Cancer (IBC)", color: "HotPink", code1: "C4001", code2: "C0278601" },
            { name: "Invasive Breast Carcinoma (BRCA)", color: "HotPink", code1: "C9245", code2: "C0853879" },
            {
                name: "Invasive Breast Carcinoma (BRCA)",
                children: [
                    { name: "Adenoid Cystic Breast Cancer (ACBC)", color: "HotPink", code1: "C5130", code2: "C1332167" },
                    { name: "Breast Carcinoma with Signet Ring (BRSRCC)", color: "HotPink", code1: "C5175", code2: "C1335964" },
                    { name: "Breast Invasive Cancer, NOS (BRCANOS)", color: "HotPink" },
                    { name: "Breast Invasive Carcinoma, NOS (BRCNOS)", color: "HotPink" },
                    { name: "Breast Invasive Carcinosarcoma, NOS (CSNOS)", color: "HotPink" },
                    { name: "Breast Invasive Ductal Carcinoma (IDC)", color: "HotPink", code1: "C4194", code2: "C1134719" },
                    { name: "Breast Invasive Lobular Carcinoma (ILC)", color: "HotPink", code1: "C7950", code2: "C0279565" },
                    { name: "Breast Invasive Mixed Mucinous Carcinoma (IMMC)", color: "HotPink", code1: "C9131", code2: "C1334807" },
                    { name: "Breast Mixed Ductal and Lobular Carcinoma (MDLC)", color: "HotPink", code1: "C5160", code2: "CL007210" },
                    { name: "Solid Papillary Carcinoma of the Breast (SPC)", color: "HotPink", code1: "C6870", code2: "C1336027" }
                ]
            },
            { name: "Juvenile Secretory Carcinoma of the Breast (JSCB)", color: "HotPink" },
            { name: "Metaplastic Breast Cancer (MBC)", color: "HotPink", code1: "C5164", code2: "C1334708" },
            {
                name: "Metaplastic Breast Cancer (MBC)",
                children: [
                    {
                        name: "Epithelial Type Metaplastic Breast Cancer (EMBC)",
                        children: [
                            { name: "Metaplastic Adenocarcinoma with Spindle Cell Differentiation (MASCC)", color: "HotPink", code1: "C40358", code2: "C1519487" },
                            { name: "Metaplastic Adenosquamous Carcinoma (MASC)", color: "HotPink", code1: "C40361", code2: "C1510796" },
                            { name: "Metaplastic Squamous Cell Carcinoma (MSCC)", color: "HotPink", code1: "C5177", code2: "C1336079" }
                        ]
                    },
                    {
                        name: "Mixed Type Metaplastic Breast Cancer (MMBC)",
                        children: [
                            { name: "Carcinoma with Chondroid Metaplasia (CCHM)", color: "HotPink", code1: "C47847", code2: "C1707042" },
                            { name: "Carcinoma with Osseous Metaplasia (COM)", color: "HotPink", code1: "C47848", code2: "C1711312" },
                            { name: "Metaplastic Carcinosarcoma (MCS)", color: "HotPink" }
                        ]
                    }
                ]
            }
        ]
    },
      {
    name: "CNS/Brain (BRAIN)",
    children: [
      {
        name: "CNS/Brain Cancer",
        color: "Gray",
        code1: "C12438",
        code2: "C3714787"
      },
      {
        name: "Choroid Plexus Tumor (CPT)",
        color: "Gray",
        code1: "C3473",
        code2: "C0085138",
        children: [
          {
            name: "Atypical Choroid Plexus Papilloma (ACPP)",
            color: "Gray",
            code1: "C53686",
            code2: "C1266176"
          },
          {
            name: "Choroid Plexus Carcinoma (CPC)",
            color: "Gray",
            code1: "C4715",
            code2: "C0431109"
          },
          {
            name: "Choroid Plexus Papilloma (CPP)",
            color: "Gray",
            code1: "C3698",
            code2: "C0205770"
          }
        ]
      },
      {
        name: "Diffuse Glioma (DIFG)",
        color: "Gray",
        children: [
          {
            name: "Anaplastic Astrocytoma (AASTR)",
            color: "Gray",
            code1: "C9477",
            code2: "C0334579"
          },
          {
            name: "Anaplastic Oligoastrocytoma (AOAST)",
            color: "Gray",
            code1: "C6959",
            code2: "C0431108"
          },
          {
            name: "Anaplastic Oligodendroglioma (AODG)",
            color: "Gray",
            code1: "C4326",
            code2: "C0334590"
          },
          {
            name: "Astrocytoma (ASTR)",
            color: "Gray",
            code1: "C60781",
            code2: "C0004114"
          },
          {
            name: "Diffuse Astrocytoma (DASTR)",
            color: "Gray",
            code1: "C7173",
            code2: "C0280785"
          },
          {
            name: "Diffuse Intrinsic Pontine Glioma (DIPG)",
            color: "Gray",
            code1: "C94764",
            code2: "C2986658"
          },
          {
            name: "Glioblastoma (GB)",
            color: "Gray",
            code1: "C3058",
            code2: "C0017636",
            children: [
              {
                name: "Glioblastoma Multiforme (GBM)",
                color: "Gray"
              },
              {
                name: "Gliosarcoma (GSARC)",
                color: "Gray",
                code1: "C3796",
                code2: "C0206726"
              },
              {
                name: "Small Cell Glioblastoma (SCGBM)",
                color: "Gray",
                code1: "C125890",
                code2: "C1272516"
              }
            ]
          },
          {
            name: "Glioma, NOS (GNOS)",
            color: "Gray"
          },
          {
            name: "High-Grade Glioma, NOS (HGGNOS)",
            color: "Gray"
          },
          {
            name: "Oligoastrocytoma (OAST)",
            color: "Gray",
            code1: "C4050",
            code2: "C0280793"
          },
          {
            name: "Oligodendroglioma (ODG)",
            color: "Gray",
            code1: "C3288",
            code2: "C0751396"
          }
        ]
      },
      {
        name: "Embryonal Tumor (EMBT)",
        color: "Gray",
        code1: "C3264",
        code2: "C0027654",
        children: [
          {
            name: "Atypical Teratoid/Rhabdoid Tumor (ATRT)",
            color: "Gray",
            code1: "C6906",
            code2: "C1266184"
          },
          {
            name: "Desmoplastic/Nodular Medulloblastoma (DMBL)",
            color: "Gray",
            code1: "C4956",
            code2: "C0751291",
            children: [
              {
                name: "Desmoplastic/Nodular Medulloblastoma, NOS (DMBLNOS)",
                color: "Gray"
              },
              {
                name: "Desmoplastic/Nodular Medulloblastoma, SHH Subtype (DMBLSHH)",
                color: "Gray"
              }
            ]
          },
          {
            name: "Embryonal Tumor with Abundant Neuropil and True Rosettes (ETANTR)",
            color: "Gray",
            code1: "C4915",
            code2: "C0700367"
          },
          {
            name: "Large Cell/Anaplastic Medulloblastoma (AMBL)",
            color: "Gray",
            code1: "C6904",
            code2: "C1266180",
            children: [
              {
                name: "Anaplastic Medulloblastoma, NOS (AMBLNOS)",
                color: "Gray"
              },
              {
                name: "Anaplastic Medulloblastoma, Non-WNT, Non-SHH (AMBLNWS)",
                color: "Gray",
                children: [
                  {
                    name: "Anaplastic Medulloblastoma, Group 3 (AMBLNWSG3)",
                    color: "Gray"
                  },
                  {
                    name: "Anaplastic Medulloblastoma, Group 4 (AMBLNWSG4)",
                    color: "Gray"
                  }
                ]
              },
              {
                name: "Anaplastic Medulloblastoma, SHH Subtype (AMBLSHH)",
                color: "Gray"
              }
            ]
          },
          {
            name: "Medulloblastoma (MBL)",
            color: "Gray",
            code1: "C3222",
            code2: "C0025149",
            children: [
              {
                name: "Medulloblastoma, NOS (MBLNOS)",
                color: "Gray"
              },
              {
                name: "Medulloblastoma, Non-WNT, Non-SHH (MBLNWS)",
                color: "Gray",
                children: [
                  {
                    name: "Medulloblastoma, Group 3 (MBLG3)",
                    color: "Gray"
                  },
                  {
                    name: "Medulloblastoma, Group 4 (MBLG4)",
                    color: "Gray"
                  }
                ]
              },
              {
                name: "Medulloblastoma, SHH Subtype (MBLSHH)",
                color: "Gray"
              },
              {
                name: "Medulloblastoma, WNT Subtype (MBLWNT)",
                color: "Gray"
              }
            ]
          },
          {
            name: "Medulloblastoma with Extensive Nodularity (MBEN)",
            color: "Gray",
            code1: "C5407",
            code2: "C1334970",
            children: [
              {
                name: "Medulloblastoma with Extensive Nodularity, NOS (MBENNOS)",
                color: "Gray"
              },
              {
                name: "Medulloblastoma with Extensive Nodularity, SHH Subtype (MBENSHH)",
                color: "Gray"
              },
            ]
          }
        ]
      },
      {
        name: "Miscellaneous Neuroepithelial Tumor (MNET)",
        children: [
          { name: "Desmoplastic Infantile Ganglioglioma (DIG)", color: "Gray", code1: "C4738", code2: "C1321878" },
          { name: "Dysplastic Gangliocytoma of the Cerebellum/Lhermitte-Duclos Disease (LDD)", color: "Gray", code1: "C8419", code2: "C0391826" },
          { name: "Extraventricular Neurocytoma (EVN)", color: "Gray", code1: "C92555", code2: "C2985175" },
          { name: "Papillary Glioneuronal Tumor (PGNT)", color: "Gray", code1: "C92554", code2: "C2985174" },
          { name: "Rosette-forming Glioneuronal Tumor of the Fourth Ventricle (RGNT)", color: "Gray", code1: "C67559", code2: "C2347979" },
        ]
      },
      {
        name: "Pineal Tumor (PINT)",
        children: [
          { name: "Papillary Tumor of the Pineal Region (PTPR)", color: "Gray", code1: "C92624", code2: "C2985219" },
          { name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)", color: "Gray", code1: "C6967", code2: "C1367859" },
          { name: "Pineoblastoma (PBL)", color: "Gray", code1: "C9344", code2: "C0205898" },
          { name: "Pineocytoma (PINC)", color: "Gray", code1: "C6966", code2: "C0917890" }
        ]
      },
      {
        name: "Primary CNS Melanocytic Tumors (PCNSMT)",
        children: [
          { name: "Melanocytoma (MELC)", color: "Gray" },
          { name: "Primary CNS Melanoma (PCNSM)", color: "LightSkyBlue", code1: "C5505", code2: "C1332888" }
        ]
      },
      {
        name: "Sellar Tumor (SELT)",
        children: [
          { name: "Atypical Pituitary Adenoma (APTAD)", color: "Gray" },
          { name: "Craniopharyngioma, Adamantinomatous Type (ACPG)", color: "Gray" },
          { name: "Craniopharyngioma, Papillary Type (PCGP)", color: "Gray" },
          { name: "Granular Cell Tumor (GCT)", color: "Gray", code1: "C3474", code2: "C0085167" },
          { name: "Pituicytoma (PTCY)", color: "Gray", code1: "C94524", code2: "C2986550" },
          { name: "Pituitary Adenoma (PTAD)", color: "Gray", code1: "C3329", code2: "C0032000" },
          { name: "Pituitary Carcinoma (PTCA)", color: "Gray", code1: "C4536", code2: "C0346300" },
          { name: "Spindle Cell Oncocytoma of the Adenohypophysis (SCOAH)", color: "Gray", code1: "C94537", code2: "C2986561" }
        ]
      }
    ]
  },
	{
  name: "Cervix (CERVIX)",
  children: [
  	{ name: "Cervical Cancer", color: "Teal", code1: "C12311", code2:	"C0007874" },
    {
      name: "Cervical Adenocarcinoma (CEAD)",
      color: "Teal",
      code1: "C4029",
      code2: "C0279672",
      children: [
        {
          name: "Cervical Clear Cell Carcinoma (CECC)",
          color: "Teal",
          code1: "C6344",
          code2: "C1332912",
        },
        {
          name: "Cervical Endometrioid Carcinoma (CEEN)",
          color: "Teal",
          code1: "C3769",
          code2: "C0206687",
        },
        {
          name: "Cervical Serous Carcinoma (CESE)",
          color: "Teal",
        },
        {
          name: "Endocervical Adenocarcinoma (ECAD)",
          color: "Teal",
          code1: "C28327",
          code2: "C1299237",
        },
        {
          name: "Mesonephric Carcinoma (CEMN)",
          color: "Teal",
          code2: "CL329978",
        },
        {
          name: "Mucinous Carcinoma (CEMU)",
          color: "Teal",
          code1: "C26712",
          code2: "C0007130",
          children: [
            {
              name: "Gastric Type Mucinous Carcinoma (GCEMU)",
              color: "Teal",
            },
            {
              name: "Intestinal Type Mucinous Carcinoma (ICEMU)",
              color: "Teal",
              code1: "C40203",
              code2: "C1516422",
            },
            {
              name: "Signet Ring Mucinous Carcinoma (SCEMU)",
              color: "Teal",
              code1: "C40205",
              code2: "C1516424",
            },
          ],
        },
        {
          name: "Villoglandular Carcinoma (CEVG)",
          color: "Teal",
          code1: "C40208",
          code2: "C1516425",
        },
      ],
    },
    {
      name: "Cervical Adenocarcinoma In Situ (CEAIS)",
      color: "Teal",
      code1: "C4520",
      code2: "C0346203",
    },
    {
      name: "Cervical Adenoid Basal Carcinoma (CABC)",
      color: "Teal",
      code1: "C40213",
      code2: "C1516403",
    },
    {
      name: "Cervical Adenoid Cystic Carcinoma (CACC)",
      color: "Teal",
      code1: "C6346",
      code2: "C1332911",
    },
    {
      name: "Cervical Adenosquamous Carcinoma (CEAS)",
      color: "Teal",
      code1: "C4519",
      code2: "C0346202",
    },
    {
      name: "Cervical Leiomyosarcoma (CELI)",
      color: "Teal",
    },
    {
      name: "Cervical Neuroendocrine Tumor (CENE)",
      color: "Teal",
      code1: "C40214",
      code2: "C1516417",
    },
    {
      name: "Cervical Rhabdomyosarcoma (CERMS)",
      color: "Teal",
    },
    {
      name: "Cervical Squamous Cell Carcinoma (CESC)",
      color: "Teal",
      code1: "C4028",
      code2: "C0279671",
    },
    {
      name: "Glassy Cell Carcinoma of the Cervix (CEGCC)",
      color: "Teal",
      code1: "C40212",
      code2: "C1516407",
    },
    {
      name: "Mixed Cervical Carcinoma (MCCE)",
      color: "Teal",
    },
    {
      name: "Small Cell Carcinoma of the Cervix (SCCE)",
      color: "Teal",
      code1: "C7982",
      code2: "C0279674",
    },
    {
      name: "Villoglandular Adenocarcinoma of the Cervix (VGCE)",
      color: "Teal",
      code1: "C40208",
      code2: "C1516425",
    },
  ],
},
{
  name: "Esophagus/Stomach (STOMACH)",
  children: [
  	{ name: "Esophageal/Stomach Cancer", color: "LightSkyBlue", code1: "C12391", code2: "C0038351"},
    {
      name: "Esophageal Poorly Differentiated Carcinoma (EPDCA)",
      color: "LightSkyBlue",
      type: "Esophagogastric Cancer",
    },
    {
      name: "Esophageal Squamous Cell Carcinoma (ESCC)",
      color: "LightSkyBlue",
      type: "Esophagogastric Cancer",
      code1: "C4024",
      code2: "C0279626",
    },
    {
      name: "Esophagogastric Adenocarcinoma (EGC)",
      color: "LightSkyBlue",
      type: "Esophagogastric Cancer",
      code1: "C9296",
      code2: "C1332166",
      children: [
        {
          name: "Adenocarcinoma of the Gastroesophageal Junction (GEJ)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
          code1: "C9296",
          code2: "C1332166",
        },
        {
          name: "Adenosquamous Carcinoma of the Stomach (STAS)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
          code1: "C5474",
          code2: "C1333761",
        },
        {
          name: "Esophageal Adenocarcinoma (ESCA)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
          code1: "C4025",
          code2: "C0279628",
        },
        {
          name: "Gastric Remnant Adenocarcinoma (GRC)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
        },
        {
          name: "Small Cell Carcinoma of the Stomach (STSC)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
          code1: "C6764",
          code2: "C1333788",
        },
        {
          name: "Stomach Adenocarcinoma (STAD)",
          color: "LightSkyBlue",
          type: "Esophagogastric Cancer",
          code1: "C4004",
          code2: "C0278701",
          children: [
            {
              name: "Diffuse Type Stomach Adenocarcinoma (DSTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C9159",
              code2: "C0279635",
            },
            {
              name: "Intestinal Type Stomach Adenocarcinoma (ISTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C9157",
              code2: "C0279633",
            },
            {
              name: "Mucinous Stomach Adenocarcinoma (MSTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C5248",
              code2: "C1334809",
            },
            {
              name: "Papillary Stomach Adenocarcinoma (PSTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C5472",
              code2: "C1333785",
            },
            {
              name: "Tubular Stomach Adenocarcinoma (TSTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C5473",
              code2: "C1333791",
            },
            {
              name: "Undifferentiated Stomach Adenocarcinoma (USTAD)",
              color: "LightSkyBlue",
              type: "Esophagogastric Cancer",
              code1: "C5476",
              code2: "C1336858",
              children: [
                {
                  name: "Poorly Differentiated Carcinoma of the Stomach (SPDAC)",
                  color: "LightSkyBlue",
                  type: "Esophagogastric Cancer",
                },
                {
                  name: "Signet Ring Cell Carcinoma of the Stomach (SSRCC)",
                  color: "LightSkyBlue",
                  type: "Esophagogastric Cancer",
                  code1: "C5250",
                  code2: "C1335965",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach (GINETES)",
      color: "LightSkyBlue",
      type: "Esophagogastric Cancer",
      children: [
        {
          name: "High-Grade Neuroendocrine Carcinoma of the Esophagus (HGNEE)",
          color: "LightSkyBlue",
          type: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach",
        },
        {
          name: "High-Grade Neuroendocrine Carcinoma of the Stomach (HGNES)",
          color: "LightSkyBlue",
          type: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach",
        },
        {
          name: "Well-Differentiated Neuroendocrine Tumors of the Stomach (SWDNET)",
          color: "LightSkyBlue",
          type: "Gastrointestinal Neuroendocrine Tumor",
          code1: "C95871",
          code2: "C3272399",
        },
      ],
    },
    {
      name: "Mucosal Melanoma of the Esophagus (ESMM)",
      color: "LightSkyBlue",
      type: "Melanoma",
      code1: "C5707",
      code2: "C1333460",
    },
    {
      name: "Smooth Muscle Neoplasm, NOS (SMN)",
      color: "LightSkyBlue",
      type: "Esophagogastric Cancer",
    },
  ],
},
{
  name: "Eye (EYE)",
  children: [
		{ name: "Eye Cancer", color: "Green", code1: "C12401", code2: "C0015392"},
    {
      name: "Lacrimal Gland Tumor (LGT)",
      type: "Lacrimal Gland Tumor",
      color: "Green",
      children: [
        {
          name: "Adenoid Cystic Carcinoma of the Lacrimal Gland (ACLG)",
          type: "Lacrimal Gland Tumor",
          color: "Green",
        },
        {
          name: "Squamous Cell Carcinoma of the Lacrimal Gland (SCLG)",
          type: "Lacrimal Gland Tumor",
          color: "Green",
        },
      ],
    },
    {
      name: "Ocular Melanoma (OM)",
      type: "Melanoma",
      color: "Green",
      code1: "C8562",
      code2: "C0558356",
      children: [
        {
          name: "Conjunctival Melanoma (CM)",
          type: "Melanoma",
          color: "Green",
          code1: "C4550",
          code2: "C0346360",
        },
        {
          name: "Uveal Melanoma (UM)",
          type: "Melanoma",
          color: "Green",
          code1: "C7712",
          code2: "C0220633",
        },
      ],
    },
    {
      name: "Retinoblastoma (RBL)",
      type: "Retinoblastoma",
      color: "Green",
      code1: "C7541",
      code2: "C0035335",
    },
  ],
},
{
  name: "Head and Neck (HEAD_NECK)",
  children: [
	{ name: "Head and Neck Cancer",
		color: "DarkRed",
  	code1: "C12418",
  	code2: "C0460004"},
    {
      name: "Head and Neck Carcinoma, Other (OHNCA)",
      type: "Head and Neck Cancer",
      color: "DarkRed",
      children: [
        {
          name: "Adenosquamous Carcinoma of the Tongue (ASCT)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
        },
        {
          name: "Epithelial-Myoepithelial Carcinoma (EMYOCA)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C4199",
          code2: "C0334392",
        },
        {
          name: "Head and Neck Neuroendocrine Carcinoma (HNNE)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
        },
        {
          name: "NUT Midline Carcinoma of the Head and Neck (NMCHN)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C45716",
          code2: "C1707291",
        },
        {
          name: "Odontogenic Carcinoma (ODGC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C4812",
          code2: "C0334558",
          children: [
            {
              name: "Clear Cell Odontogenic Carcinoma (CCOC)",
              type: "Head and Neck Cancer",
              color: "DarkRed",
              code1: "C54300",
              code2: "C0475829",
            },
          ],
        },
        {
          name: "Sinonasal Adenocarcinoma (SNA)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "CL473651",
        },
        {
          name: "Sinonasal Undifferentiated Carcinoma (SNUC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C54294",
          code2: "C1710096",
        },
      ],
    },
    {
      name: "Head and Neck Mucosal Melanoma (HNMUCM)",
      type: "Melanoma",
      color: "DarkRed",
    },
    {
      name: "Head and Neck Squamous Cell Carcinoma (HNSC)",
      type: "Head and Neck Cancer",
      color: "DarkRed",
      code1: "C34447",
      code2: "C1168401",
      children: [
        {
          name: "Head and Neck Squamous Cell Carcinoma of Unknown Primary (HNSCUP)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
        },
        {
          name: "Hypopharynx Squamous Cell Carcinoma (HPHSC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C4043",
          code2: "C0280321",
        },
        {
          name: "Larynx Squamous Cell Carcinoma (LXSC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C4044",
          code2: "C0280324",
        },
        {
          name: "Oral Cavity Squamous Cell Carcinoma (OCSC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C4833",
          code2: "C0585362",
        },
        {
          name: "Oropharynx Squamous Cell Carcinoma (OPHSC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C0280313",
        },
        {
          name: "Sinonasal Squamous Cell Carcinoma (SNSC)",
          type: "Head and Neck Cancer",
          color: "DarkRed",
          code1: "C54287",
          code2: "C0334270",
        },
      ],
    },
    {
      name: "Nasopharyngeal Carcinoma (NPC)",
      type: "Head and Neck Cancer",
      color: "DarkRed",
      code1: "C3871",
      code2: "C2931822",
    },
    {
      name: "Parathyroid Cancer (PTH)",
      type: "Parathyroid Cancer",
      color: "DarkRed",
      children: [
        {
          name: "Parathyroid Carcinoma (PTHC)",
          type: "Parathyroid Cancer",
          color: "DarkRed",
        },
      ],
    },
    {
      name: "Salivary Carcinoma (SACA)",
      type: "Salivary Gland Cancer",
      color: "DarkRed",
      code1: "C9272",
      code2: "C0948750",
      children: [
        {
          name: "Acinic Cell Carcinoma (ACCC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C3768",
          code2: "C0206685",
        },
        {
          name: "Adenoid Cystic Carcinoma (ACYC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C2970",
          code2: "C0010606",
        },
        {
          name: "Basal Cell Adenocarcinoma (BCAC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Carcinoma ex Pleomorphic Adenoma (CAEXPA)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Mammary Analogue Secretory Carcinoma of Salivary Gland Origin (HNMASC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Mucoepidermoid Carcinoma (MUCC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C3772",
          code2: "C0206694",
        },
        {
          name: "Myoepithelial Carcinoma (MYEC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C35700",
          code2: "C1335904",
        },
        {
          name: "Pleomorphic Adenoma (PADA)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Polymorphous Adenocarcinoma (PAC)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Salivary Adenocarcinoma (SAAD)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C8021",
          code2: "C0279746",
        },
        {
          name: "Salivary Carcinoma, Other (OSACA)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
        },
        {
          name: "Salivary Duct Carcinoma (SDCA)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C5904",
          code2: "C1301194",
        },
        {
          name: "Salivary Gland Oncocytoma (SGO)",
          type: "Salivary Gland Cancer",
          color: "DarkRed",
          code1: "C5932",
          code2: "C1335906",
        },
      ],
    },
    {
      name: "Sialoblastoma (SBL)",
      type: "Sialoblastoma",
      color: "DarkRed",
    },
  ],
},
{
  name: "Kidney (KIDNEY)",
  children: [
  	{ name : "Kidney Cancer",
  	color: "Orange",
  	code1: "C12415",
  	code2: "C0022646"},
    {
      name: "Clear Cell Sarcoma of Kidney (CCSK)",
      type: "Clear Cell Sarcoma of Kidney",
      color: "Orange",
    },
    {
      name: "Renal Cell Carcinoma (RCC)",
      type: "Renal Cell Carcinoma",
      color: "Orange",
      code1: "C9385",
      code2: "C0007134",
      children: [
        {
          name: "Renal Clear Cell Carcinoma (CCRCC)",
          type: "Renal Cell Carcinoma",
          color: "Orange",
          code1: "C4033",
          code2: "C0279702",
          children: [
            {
              name: "Renal Clear Cell Carcinoma with Sarcomatoid Features (SCCRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
            },
          ],
        },
        {
          name: "Renal Non-Clear Cell Carcinoma (NCCRCC)",
          type: "Renal Cell Carcinoma",
          color: "Orange",
          children: [
            {
              name: "Chromophobe Renal Cell Carcinoma (CHRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C4146",
              code2: "C1266042",
            },
            {
              name: "Clear Cell Papillary Renal Cell Carcinoma (CCPRC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
            },
            {
              name: "Collecting Duct Renal Cell Carcinoma (CDRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C6194",
              code2: "C1266044",
            },
            {
              name: "FH-Deficient Renal Cell Carcinoma (FHRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
            },
            {
              name: "Papillary Renal Cell Carcinoma (PRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C6975",
              code2: "C1306837",
            },
            {
              name: "Renal Angiomyolipoma (RAML)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C3888",
              code2: "C0241961",
            },
            {
              name: "Renal Medullary Carcinoma (MRC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "CL448379",
            },
            {
              name: "Renal Mucinous Tubular Spindle Cell Carcinoma (MTSCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C39807",
              code2: "C1513719",
            },
            {
              name: "Renal Oncocytoma (ROCY)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C4526",
              code2: "C0346255",
            },
            {
              name: "Renal Small Cell Carcinoma (RSCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "CL473652",
            },
            {
              name: "Sarcomatoid Renal Cell Carcinoma (SRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C27893",
              code2: "C1266043",
            },
            {
              name: "Translocation-Associated Renal Cell Carcinoma (TRCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C27891",
              code2: "C1337036",
            },
            {
              name: "Unclassified Renal Cell Carcinoma (URCC)",
              type: "Renal Cell Carcinoma",
              color: "Orange",
              code1: "C27892",
              code2: "C1336853",
            },
          ],
        },
      ],
    },
    {
      name: "Renal Neuroendocrine Tumor (RNET)",
      type: "Renal Neuroendocrine Tumor",
      color: "Orange",
    },
    {
      name: "Rhabdoid Cancer (MRT)",
      type: "Rhabdoid Cancer",
      color: "Orange",
      code1: "C3808",
      code2: "C0206743",
    },
    {
      name: "Wilms' Tumor (WT)",
      type: "Wilms Tumor",
      color: "Orange",
      code1: "CL343552",
    },
  ],
},
{
  name: "Liver (LIVER)",
  children: [
  	{ name: "Liver Cancer",
  		color: "MediumSeaGreen",
  		code1: "C12392",
  		code2: "C0023884"},
    {
      name: "Fibrolamellar Carcinoma (FLC)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C4131",
      code2: "C0334287",
    },
    {
      name: "Hepatoblastoma (LIHB)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C3728",
      code2: "C0206624",
    },
    {
      name: "Hepatocellular Adenoma (LIAD)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C3758",
      code2: "C0206669",
    },
    {
      name: "Hepatocellular Carcinoma (HCC)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C3099",
      code2: "C0019204",
    },
    {
      name: "Hepatocellular Carcinoma plus Intrahepatic Cholangiocarcinoma (HCCIHCH)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C3828",
      code2: "C0221287",
    },
    {
      name: "Liver Angiosarcoma (LIAS)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
      code1: "C4438",
      code2: "C0345907",
    },
    {
      name: "Malignant Nonepithelial Tumor of the Liver (LIMNET)",
      type: "Hepatobiliary Cancer",
      color: "MediumSeaGreen",
    },
    {
      name: "Malignant Rhabdoid Tumor of the Liver (MRTL)",
      type: "Malignant Rhabdoid Tumor of the Liver",
      color: "MediumSeaGreen",
    },
    {
      name: "Undifferentiated Embryonal Sarcoma of the Liver (UESL)",
      type: "Undifferentiated Embryonal Sarcoma of the Liver",
      color: "MediumSeaGreen",
    },
  ],
},
{
  name: "Lung (LUNG)",
  children: [
  	{ name: "Lung Cancer",
  		color: "Gainsboro",
  		code1: "C12468",
  		code2: "C0024109"},
    {
      name: "Combined Small Cell Lung Carcinoma (CSCLC)",
      type: "Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C9137",
      code2: "C0334240",
    },
    {
      name: "Inflammatory Myofibroblastic Lung Tumor (IMTL)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C39740",
      code2: "C1518038",
    },
    {
      name: "Lung Adenocarcinoma In Situ (LAIS)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
    },
    {
      name: "Lung Neuroendocrine Tumor (LNET)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C5670",
      code2: "C1334452",
      children: [
        {
          name: "Atypical Lung Carcinoid (ALUCA)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C45551",
          code2: "C1708766",
        },
        {
          name: "Large Cell Neuroendocrine Carcinoma (LUNE)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C6875",
          code2: "C1265996",
        },
        {
          name: "Lung Carcinoid (LUCA)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C4038",
          code2: "C0280089",
        },
        {
          name: "Small Cell Lung Cancer (SCLC)",
          type: "Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C4917",
          code2: "C0149925",
        },
      ],
    },
    {
      name: "Non-Small Cell Lung Cancer (NSCLC)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C2926",
      code2: "C0007131",
      children: [
        {
          name: "Ciliated Muconodular Papillary Tumor of the Lung (CMPT)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
        },
        {
          name: "Large Cell Lung Carcinoma (LCLC)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C4450",
          code2: "C0345958",
          children: [
            {
              name: "Basaloid Large Cell Carcinoma of the Lung (BLCLC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C7266",
              code2: "C1332463",
            },
            {
              name: "Clear Cell Carcinoma of the Lung (CCLC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C4451",
              code2: "C1707407",
            },
            {
              name: "Giant Cell Carcinoma of the Lung (GCLC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C4452",
              code2: "C0345960",
            },
            {
              name: "Large Cell Lung Carcinoma With Rhabdoid Phenotype (RLCLC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C6876",
              code2: "C1265997",
            },
            {
              name: "Lymphoepithelioma-like Carcinoma of the Lung (LECLC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C45519",
              code2: "C1708792",
            },
          ],
        },
        {
          name: "Lung Adenocarcinoma (LUAD)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C3512",
          code2: "C0152013",
        },
        {
          name: "Lung Adenosquamous Carcinoma (LUAS)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C9133",
          code2: "C0279557",
        },
        {
          name: "Lung Squamous Cell Carcinoma (LUSC)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C3493",
          code2: "C0149782",
        },
        {
          name: "NUT Carcinoma of the Lung (NUTCL)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
        },
        {
          name: "Pleomorphic Carcinoma of the Lung (LUPC)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C45542",
          code2: "C1711397",
        },
        {
          name: "Poorly Differentiated Non-Small Cell Lung Cancer (NSCLCPD)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
        },
        {
          name: "Salivary Gland-Type Tumor of the Lung (SGTTL)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          children: [
            {
              name: "Adenoid Cystic Carcinoma of the Lung (LUACC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C5666",
              code2: "C1334439",
            },
            {
              name: "Mucoepidermoid Carcinoma of the Lung (LUMEC)",
              type: "Non-Small Cell Lung Cancer",
              color: "Gainsboro",
              code1: "C45544",
              code2: "C1708778",
            },
          ],
        },
        {
          name: "Spindle Cell Carcinoma of the Lung (SPCC)",
          type: "Non-Small Cell Lung Cancer",
          color: "Gainsboro",
          code1: "C45541",
          code2: "C1708784",
        },
      ],
    },
    {
      name: "Pleuropulmonary Blastoma (PPB)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C5669",
      code2: "C1266144",
    },
    {
      name: "Pulmonary Lymphangiomyomatosis (LAM)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C38153",
      code2: "C0349649",
    },
    {
      name: "Sarcomatoid Carcinoma of the Lung (SARCL)",
      type: "Non-Small Cell Lung Cancer",
      color: "Gainsboro",
      code1: "C45540",
      code2: "C1708781",
    },
  ],
},
  {
    name: "Lymphoid (LYMPH)",
    children: [
    	{ name: "Lymphatic Cancer",
    		color: "LimeGreen",
    		code1: "C13252",
    		code2: "C0024202" },
      {
        name: "Lymphoid Atypical (LATL)",
        type: "Lymphatic Cancer, NOS",
        color: "LimeGreen"
      },
      {
        name: "Lymphoid Benign (LBGN)",
        type: "Lymphatic Cancer, NOS",
        color: "LimeGreen"
      },
      {
        name: "Lymphoid Neoplasm (LNM)",
        type: "Lymphatic Cancer, NOS",
        color: "LimeGreen"
      },
      {
        name: "Lymphoid Neoplasm (LNM)",
        type: "Lymphatic Cancer, NOS",
        color: "LimeGreen",
        children: [
          {
            name: "B-Lymphoblastic Leukemia/Lymphoma (BLL)",
            type: "B-Lymphoblastic Leukemia/Lymphoma",
            color: "LimeGreen",
            children: [
              {
                name: "B-Lymphoblastic Leukemia/Lymphoma with Recurrent Genetic Abnormalities (BLLRGA)",
                children: [
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with Hyperdiploidy (BLLHYPER)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with Hypodiploidy (BLLHYPO)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with iAMP21 (BLLIAMP21)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with t(12;21)(p13.2;q22.1); ETV6-RUNX1 (BLLETV6RUNX1)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with t(1;19)(q23;p13.3);TCF3-PBX1 (BLLTCF3PBX1)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with t(5;14)(q31.1;q32.3) IL3-IGH (BLLIL3IGH)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with t(9;22)(q34.1;q11.2);BCR-ABL1 (BLLBCRABL1)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma with t(v;11q23.3);KMT2A Rearranged (BLLKMT2A)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" },
                  { name: "B-Lymphoblastic Leukemia/Lymphoma, BCR-ABL1 Like (BLLBCRABL1L)", type: "B-Lymphoblastic Leukemia/Lymphoma", color: "LimeGreen" }
                ]
              },
              {
                name: "B-Lymphoblastic Leukemia/Lymphoma, NOS (BLLNOS)",
                type: "B-Lymphoblastic Leukemia/Lymphoma",
                color: "LimeGreen"
              }
            ]
          },
          {
            name: "Hodgkin Lymphoma (HL)",
            type: "Hodgkin Lymphoma",
            color: "LimeGreen",
            children: [
              {
                name: "Classical Hodgkin Lymphoma (CHL)",
                type: "Hodgkin Lymphoma",
                color: "LimeGreen",
                children: [
                  { name: "Lymphocyte-Depleted Classical Hodgkin Lymphoma (LDCHL)", type: "Hodgkin Lymphoma", color: "LimeGreen" },
                  { name: "Lymphocyte-Rich Classical Hodgkin Lymphoma (LRCHL)", type: "Hodgkin Lymphoma", color: "LimeGreen" },
                  { name: "Mixed Cellularity Classical Hodgkin Lymphoma (MCCHL)", type: "Hodgkin Lymphoma", color: "LimeGreen" },
                  { name: "Nodular Sclerosis Classical Hodgkin Lymphoma (NSCHL)", type: "Hodgkin Lymphoma", color: "LimeGreen" }
                ]
              },
              {
                name: "Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)",
                type: "Hodgkin Lymphoma",
                color: "LimeGreen"
              }
            ]
          },
        {
          name: "Non-Hodgkin Lymphoma (NHL)",
          children: [
            {
              name: "Mature B-Cell Neoplasms (MBN)",
              children: [
                {
                  name: "Mature B-Cell Neoplasms",
                  color: "LimeGreen",
                  code: "C3457",
                  id: "CL448793",
                  acronym: "BCL"
                },
                {
                  name: "ALK Positive Large B-Cell Lymphoma (ALKLBCL)",
                  color: "LimeGreen"
                },
                {
                  name: "Alpha Heavy-Chain Disease (AHCD)",
                  color: "LimeGreen"
                },
                {
                  name: "B-Cell Lymphoma, Unclassifiable, with Features Intermediate between DLBCL and Classical Hodgkin Lymphoma (BCLU)",
                  color: "LimeGreen"
                },
                {
                  name: "B-Cell Prolymphocytic Leukemia (BPLL)",
                  color: "LimeGreen"
                },
                {
                  name: "Burkitt Lymphoma (BL)",
                  color: "LimeGreen",
                  code: "C2912",
                  id: "C0006413"
                },
                {
                  name: "Burkitt-Like Lymphoma with 11q Aberration (BLL11Q)",
                  color: "LimeGreen"
                },
                {
                  name: "Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma (CLLSLL)",
                  color: "LimeGreen",
                  code: "C7540",
                  id: "C0855095",
                  acronym: "CLL,SLL"
                },
                {
                  name: "DLBCL Associated with Chronic Inflammation (DLBCLCI)",
                  color: "LimeGreen"
                },
                {
                  name: "Diffuse Large B-Cell Lymphoma, NOS (DLBCLNOS)",
                  color: "LimeGreen",
                  acronym: "DLBCL",
                  children: [
                    {
                      name: "Activated B-cell Type (ABC)",
                      color: "LimeGreen"
                    },
                    {
                      name: "Germinal Center B-Cell Type (GCB)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "EBV Positive DLBCL, NOS (EBVDLBCLNOS)",
                  color: "LimeGreen"
                },
                {
                  name: "EBV Positive Mucocutaneous Ulcer (EBVMCU)",
                  color: "LimeGreen"
                },
                {
                  name: "Extraosseous Plasmacytoma (EP)",
                  color: "LimeGreen"
                },
                {
                  name: "Follicular Lymphoma (FL)",
                  color: "LimeGreen",
                  code: "C3209",
                  id: "C0024301",
                  children: [
                    {
                      name: "Duodenal-Type Follicular Lymphoma (DFL)",
                      color: "LimeGreen"
                    },
                    {
                      name: "In Situ Follicular Neoplasia (ISFN)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "Gamma Heavy-Chain Disease (GHCD)",
                  color: "LimeGreen"
                },
                {
                  name: "HHV8 Positive DLBCL, NOS (HHV8DLBCL)",
                  color: "LimeGreen"
                },
                {
                  name: "Hairy Cell Leukemia (HCL)",
                  color: "LimeGreen",
                  code: "C7402",
                  id: "C0023443"
                },
                {
                  name: "High-Grade B-Cell Lymphoma, NOS (HGBCL)",
                  color: "LimeGreen"
                },
                {
                  name: "High-Grade B-Cell Lymphoma, with MYC and BCL2 and/or BCL6 Rearrangements (HGBCLMYCBCL2)",
                  color: "LimeGreen"
                },
                {
                  name: "Intravascular Large B-Cell Lymphoma (IVBCL)",
                  color: "LimeGreen"
                },
                {
                  name: "Large B-Cell Lymphoma with IRF4 Rearrangement (LBLIRF4)",
                  color: "LimeGreen"
                },
                {
                  name: "Lymphomatoid Granulomatosis (LYG)",
                  color: "LimeGreen"
                },
                {
                  name: "Lymphoplasmacytic Lymphoma (LPL)",
                  color: "LimeGreen",
                  children: [
                    {
                      name: "Waldenstrom Macroglobulinemia (WM)",
                      color: "LimeGreen",
                      code: "C80307",
                      id: "C0024419"
                    }
                  ]
                },
                {
                  name: "Mantle Cell Lymphoma (MCL)",
                  color: "LimeGreen",
                  code: "C4337",
                  id: "C0334634",
                  children: [
                    {
                      name: "In Situ Mantle Cell Neoplasia (ISMCL)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "Marginal Zone Lymphoma (MZL)",
                  color: "LimeGreen",
                  code: "C4341",
                  id: "C1367654",
                  children: [
                    {
                      name: "Extranodal Marginal Zone Lymphoma of Mucosa-Associated Lymphoid Tissue (MALT lymphoma) (EMALT)",
                      color: "LimeGreen",
                      code: "C3898",
                      id: "C0242647",
                      acronym: "MALTL"
                    },
                    {
                      name: "Nodal Marginal Zone Lymphoma (NMZL)",
                      color: "LimeGreen",
                      code: "C8863",
                      id: "C0855139"
                    },
                    {
                      name: "Splenic Marginal Zone Lymphoma (SMZL)",
                      color: "LimeGreen",
                      code: "C4663",
                      id: "C0349632"
                    }
                  ]
                },
                {
                  name: "Monoclonal B-Cell Lymphocytosis (MCBCL)",
                  color: "LimeGreen"
                },
                {
                  name: "Monoclonal Gammopathy of Undetermined Significance (MGUS)",
                  color: "LimeGreen",
                  children: [
                    {
                      name: "IgA (MGUSIGA)",
                      color: "LimeGreen"
                    },
                    {
                      name: "IgG (MGUSIGG)",
                      color: "LimeGreen"
                    },
                    {
                      name: "IgM (MGUSIGM)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "Monoclonal Immunoglobulin Deposition Diseases (MIDD)",
                  color: "LimeGreen",
                  children: [
                    {
                      name: "Amyloidosis (MIDDA)",
                      color: "LimeGreen"
                    },
                    {
                      name: "Monoclonal Immunoglobulin Deposition Diseases, Other (MIDDO)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "Mu Heavy-Chain Disease (MHCD)",
                  color: "LimeGreen"
                },
                {
                  name: "Pediatric-Type Follicular Lymphoma (PTFL)",
                  color: "LimeGreen"
                },
                {
                  name: "Plasma Cell Myeloma (PCM)",
                  color: "LimeGreen",
                  code: "C3242",
                  id: "C0026764",
                  acronym: "MM"
                },
                {
                  name: "Plasmablastic Lymphoma (PLBL)",
                  color: "LimeGreen"
                },
                {
                  name: "Primary Cutaneous DLBCL, Leg Type (PCLBCLLT)",
                  color: "LimeGreen"
                },
                {
                  name: "Primary Cutaneous Follicle Center Lymphoma (PCFCL)",
                  color: "LimeGreen"
                },
                {
                  name: "Primary DLBCL of the Central Nervous System (PCNSL)",
                  color: "LimeGreen",
                  code: "C9301",
                  id: "C0280803"
                },
                {
                  name: "Primary Effusion Lymphoma (PEL)",
                  color: "LimeGreen",
                  code: "C6915",
                  id: "C1292753"
                },
                {
                  name: "Primary Mediastinal (Thymic) Large B-Cell Lymphoma (PMBL)",
                  color: "LimeGreen",
                  code: "C9280",
                  id: "C1292754",
                  acronym: "MBCL"
                },
                {
                  name: "Solitary Plasmacytoma of Bone (SPB)",
                  color: "LimeGreen"
                },
                {
                  name: "Splenic B-Cell Lymphoma/Leukemia, Unclassifiable (SBLU)",
                  color: "LimeGreen",
                  children: [
                    {
                      name: "Hairy Cell Leukemia-Variant (HCL-V)",
                      color: "LimeGreen"
                    },
                    {
                      name: "Splenic Diffuse Red Pulp Small B-Cell Lymphoma (SDRPL)",
                      color: "LimeGreen"
                    }
                  ]
                },
                {
                  name: "T-Cell/Histiocyte-Rich Large B-Cell Lymphoma (THRLBCL)",
                  color: "LimeGreen"
                }
              ]
            }
					]
				},
        {
              name: "Mature T and NK Neoplasms (MTNN)",
              color: "LimeGreen",
              code: "C3466",
              umls: "C0079772",
              abbreviation: "TNKL",
              children: [
                { name: "Adult T-Cell Leukemia/Lymphoma (ATLL)", color: "LimeGreen" },
                { name: "Aggressive NK-Cell Leukemia (ANKL)", color: "LimeGreen" },
                {
                  name: "Anaplastic Large Cell Lymphoma (ALCL)",
                  color: "LimeGreen",
                  children: [
                    { name: "Anaplastic Large-Cell Lymphoma ALK Negative (ALCLALKN)", color: "LimeGreen" },
                    { name: "Anaplastic Large-Cell Lymphoma ALK Positive (ALCLALKP)", color: "LimeGreen" },
                    { name: "Breast Implant-Associated Anaplastic Large-Cell Lymphoma (BIALCL)", color: "LimeGreen" },
                  ]
                },
                { name: "Angioimmunoblastic T-Cell Lymphoma (AITL)", color: "LimeGreen", code: "C7528", umls: "C0020981" },
                { name: "Chronic Lymphoproliferative Disorder of NK Cells (CLPDNK)", color: "LimeGreen" },
                { name: "Enteropathy-Associated T-Cell Lymphoma (EATL)", color: "LimeGreen" },
                { name: "Extranodal NK-/T-Cell Lymphoma, Nasal Type (ENKL)", color: "LimeGreen" },
                { name: "Follicular T-Cell Lymphoma (FTCL)", color: "LimeGreen" },
                { name: "Hepatosplenic T-cell Lymphoma (HSTCL)", color: "LimeGreen" },
                { name: "Hydroa Vacciniforme Like Lymphoproliferative Disorder (HVLL)", color: "LimeGreen" },
                { name: "Indolent T-Cell Lymphoproliferative Disorder of the GI Tract (ITLPDGI)", color: "LimeGreen" },
                { name: "Monomorphic Epitheliotropic Intestinal T-Cell Lymphoma (MEITL)", color: "LimeGreen", abbreviation: "MEATL" },
                { name: "Mycosis Fungoides (MYCF)", color: "LimeGreen", code: "C3246", umls: "C0026948", abbreviation: "CTCL" },
                { name: "Nodal Peripheral T-Cell Lymphoma with TFH Phenotype (NPTLTFH)", color: "LimeGreen" },
                { name: "Peripheral T-Cell Lymphoma, NOS (PTCL)", color: "LimeGreen", abbreviation: "PTCLNOS" },
                { name: "Primary Cutaneous Acral CD8 Positive T-Cell Lymphoma (PCATCL)", color: "LimeGreen" },
                {
                  name: "Primary Cutaneous CD30 Positive T-Cell Lymphoproliferative Disorders (PCLPD)",
                  color: "LimeGreen",
                  children: [
                    { name: "Lymphomatoid Papulosis (LYP)", color: "LimeGreen" },
                    { name: "Primary Cutaneous Anaplastic Large Cell Lymphoma (PCALCL)", color: "LimeGreen" }
                  ]
                },
                { name: "Primary Cutaneous CD4 Positive Small/Medium T-Cell Lymphoproliferative Disorder (PCSMTPLD)", color: "LimeGreen" },
                { name: "Primary Cutaneous CD8 Positive Aggressive Epidermotropic Cytotoxic T-Cell Lymphoma (PCAECTCL)", color: "LimeGreen" },
                { name: "Primary Cutaneous Gamma Delta T-Cell Lymphoma (PCGDTCL)", color: "LimeGreen" },
                { name: "Sezary Syndrome (SS)", color: "LimeGreen", abbreviation: "SEZS" },
                { name: "Subcutaneous Panniculitis-Like T-Cell Lymphoma (SPTCL)", color: "LimeGreen" },
                { name: "Systemic EBV Positive T-Cell Lymphoma of Childhood (SEBVTLC)", color: "LimeGreen" },
                { name: "T-Cell Large Granular Lymphocytic Leukemia (TLGL)", color: "LimeGreen", code: "C4664", umls: "C1955861", abbreviation: "LGLL" },
                { name: "T-Cell Prolymphocytic Leukemia (TPLL)", color: "LimeGreen" },
              ]


        },
        {
          name: "Posttransplant Lymphoproliferative Disorders (PTLD)",
          color: "LimeGreen",
          children: [
            { name: "Classical Hodgkin Lymphoma PTLD (CHLPTLD)", color: "LimeGreen" },
            { name: "Florid Follicular Hyperplasia PTLD (FHPTLD)", color: "LimeGreen" },
            { name: "Infectious Mononucleosis PTLD (IMPTLD)", color: "LimeGreen" },
            { name: "Monomorphic PTLD (B- and T-/NK-cell types) (MPTLD)", color: "LimeGreen" },
            { name: "Plasmacytic Hyperplasia PTLD (PHPTLD)", color: "LimeGreen" },
            { name: "Polymorphic PTLD (PPTLD)", color: "LimeGreen" },
          ]
        },
        {
          name: "T-Lymphoblastic Leukemia/Lymphoma (TLL)",
          color: "LimeGreen",
          abbreviation: "ALL,TALL",
          children: [
            { name: "Early T-Cell Precursor Lymphoblastic Leukemia (ETPLL)", color: "LimeGreen" },
            { name: "Natural Killer (NK) Cell Lymphoblastic Leukemia/Lymphoma (NKCLL)", color: "LimeGreen" },
          ]
        },
				]
				}
      ]
    },
    {
  name: "Myeloid (MYELOID)",
  children: [
  	{ name: "Blood Cancer",
  		color: "LightSalmon",
  		code: "C12434",
  		umls: "C0005767",
  		abbreviation: "BLOOD"},
    {
      name: "Myeloid Atypical (MATPL)",
      color: "LightSalmon",
      parent: "Blood Cancer, NOS"
    },
    {
      name: "Myeloid Benign (MBGN)",
      color: "LightSalmon",
      parent: "Blood Cancer, NOS"
    },
    {
      name: "Myeloid Neoplasm (MNM)",
      color: "LightSalmon",
      abbreviation: "LEUK",
      parent: "Blood Cancer, NOS",
      children: [
        {
          name: "Acute Leukemias of Ambiguous Lineage (ALAL)",
          color: "LightSalmon",
          parent: "Leukemia",
          children: [
            { name: "Acute Undifferentiated Leukemia (AUL)", color: "LightSalmon" },
            { name: "Mixed Phenotype Acute Leukemia with t(9;22)(q34.1;q11.2); BCR-ABL1 (MPALBCRABL1)", color: "LightSalmon" },
            { name: "Mixed Phenotype Acute Leukemia with t(v;11q23.3); KMT2A Rearranged (MPALKMT2A)", color: "LightSalmon" },
            { name: "Mixed Phenotype Acute Leukemia, B/Myeloid, NOS (MPALBNOS)", color: "LightSalmon" },
            { name: "Mixed Phenotype Acute Leukemia, T/Myeloid, NOS (MPALTNOS)", color: "LightSalmon" }
          ]
        },
        {
          name: "Acute Myeloid Leukemia (AML)",
          color: "LightSalmon",
          code: "C3171",
          umls: "C0023467",
          parent: "Leukemia",
          children: [
            { name: "AML with Myelodysplasia-Related Changes (AMLMRC)", color: "LightSalmon" },
            {
              name: "AML with Recurrent Genetic Abnormalities (AMLRGA)",
              color: "LightSalmon",
              children: [
                { name: "AML (megakaryoblastic) with t(1;22)(p13.3;q13.3);RBM15-MKL1 (AMLRBM15MKL1)", color: "LightSalmon" },
                { name: "AML with BCR-ABL1 (AMLBCRABL1)", color: "LightSalmon" },
                { name: "AML with Biallelic Mutations of CEBPA (AMLCEBPA)", color: "LightSalmon" },
                { name: "AML with Mutated NPM1 (AMLNPM1)", color: "LightSalmon" },
                { name: "AML with Mutated RUNX1 (AMLRUNX1)", color: "LightSalmon" },
                { name: "AML with Variant RARA translocation (AMLRARA)", color: "LightSalmon" },
                { name: "AML with inv(16)(p13.1q22) or t(16;16)(p13.1;q22);CBFB-MYH11 (AMLCBFBMYH11)", color: "LightSalmon" },
                { name: "AML with inv(3)(q21.3q26.2) or t(3;3)(q21.3;q26.2); GATA2, MECOM (AMLGATA2MECOM)", color: "LightSalmon" },
                { name: "AML with t(6;9)(p23;q34.1);DEK-NUP214 (AMLDEKNUP214)", color: "LightSalmon" },
                { name: "AML with t(8;21)(q22;q22.1);RUNX1-RUNX1T1 (AMLRUNX1RUNX1T1)", color: "LightSalmon" },
                { name: "AML with t(9;11)(p21.3;q23.3);MLLT3-KMT2A (AMLMLLT3KMT2A)", color: "LightSalmon" },
                { name: "APL with PML-RARA (APLPMLRARA)", color: "LightSalmon" }
              ]
            },
            {
              name: "AML, NOS (AMLNOS)",
              color: "LightSalmon",
              children: [
                { name: "AML with Maturation (AM)", color: "LightSalmon" },
                { name: "AML with Minimal Differentiation (AMLMD)", color: "LightSalmon" },
                { name: "AML without Maturation (AWM)", color: "LightSalmon" },
                { name: "Acute Basophilic Leukemia (ABL)", color: "LightSalmon" },
                { name: "Acute Megakaryoblastic Leukemia (AMKL)", color: "LightSalmon" },
                { name: "Acute Monoblastic/Monocytic Leukemia (AMOL)", color: "LightSalmon", code: "C4861", umls: "C0023465" },
                { name: "Acute Myelomonocytic Leukemia (AMML)", color: "LightSalmon" },
                { name: "Acute Panmyelosis with Myelofibrosis (APMF)", color: "LightSalmon" },
                { name: "Pure Erythroid Leukemia (PERL)", color: "LightSalmon" }
              ]
            },
            {
              name: "Myeloid Proliferations Related to Down Syndrome (MPRDS)",
              color: "LightSalmon",
              children: [
                { name: "Myeloid Leukemia Associated with Down Syndrome (MLADS)", color: "LightSalmon" },
                { name: "Transient Abnormal Myelopoiesis (TAM)", color: "LightSalmon" }
              ]
            },
            { name: "Myeloid Sarcoma (MS)", color: "LightSalmon" },
            {
              name: "Therapy-Related Myeloid Neoplasms (TMN)",
              color: "LightSalmon",
              children: [
                { name: "Therapy-Related Acute Myeloid Leukemia (TAML)", color: "LightSalmon" },
                { name: "Therapy-Related Myelodysplastic Syndrome (TMDS)", color: "LightSalmon" }
              ]
            }
          ]
        },
        {
          name: "Blastic Plasmacytoid Dendritic Cell Neoplasm (BPDCN)",
          color: "LightSalmon",
          code: "C7203",
          umls: "C1301363",
          parent: "Blastic Plasmacytoid Dendritic Cell Neoplasm"
        },
        {
          name: "Histiocytic and Dendritic Cell Neoplasms (HDCN)",
          color: "LightSalmon",
          code: "C3106",
          umls: "C0019618",
          abbreviation: "HIST",
          parent: "Histiocytosis",
          children: [
            { name: "Disseminated Juvenile Xanthogranuloma (JXG)", color: "LightSalmon" },
            { name: "Erdheim-Chester Disease (ECD)", color: "LightSalmon", code: "C53972", umls: "C0878675" },
            { name: "Fibroblastic Reticular Cell Tumor (FRCT)", color: "LightSalmon" },
            { name: "Follicular Dendritic Cell Sarcoma (FDCS)", color: "LightYellow", code: "C9281", umls: "C1260325", parent: "Soft Tissue Sarcoma" },
            { name: "Histiocytic Sarcoma (HS)", color: "LightSalmon" },
            { name: "Indeterminate Dendritic Cell Tumor (IDCT)", color: "LightSalmon" },
            { name: "Interdigitating Dendritic Cell Sarcoma (IDCS)", color: "LightYellow", code: "C9282", umls: "C1260326", parent: "Soft Tissue Sarcoma" },
            { name: "Langerhans Cell Histiocytosis (LCH)", color: "LightSalmon", code: "C3107", umls: "C0019621" },
            { name: "Langerhans Cell Sarcoma (LCS)", color: "LightSalmon" },
            { name: "Rosai-Dorfman Disease (RDD)", color: "LightSalmon", code: "C36075", umls: "C0019625", abbreviation: "RD" }
          ]
        },
        {
          name: "Mastocytosis (MCD)",
          color: "LightSalmon",
          parent: "Mastocytosis",
          children: [
            { name: "Cutaneous Mastocytosis (CMCD)", color: "LightSalmon" },
            { name: "Mast Cell Sarcoma (MCSL)", color: "LightSalmon" },
            {
              name: "Systemic Mastocytosis (SM)",
              color: "LightSalmon",
              code: "C9235",
              umls: "C0221013",
              children: [
                { name: "Aggressive Systemic Mastocytosis (ASM)", color: "LightSalmon" },
                { name: "Indolent Systemic Mastocytosis (ISM)", color: "LightSalmon" },
                { name: "Mast Cell Leukemia (SMMCL)", color: "LightSalmon" },
                { name: "Smoldering Systemic Mastocytosis (SSM)", color: "LightSalmon" },
                { name: "Systemic Mastocytosis with an Associated Hematological Neoplasm (SMAHN)", color: "LightSalmon" }
              ]
            },
					]
    		},
    		{
          name: "Myelodysplastic Syndromes (MDS)",
          color: "LightSalmon",
          code: "C3247",
          umls: "C3463824",
          parent: "Myelodysplastic Syndromes",
          children: [
            { name: "MDS with Excess Blasts (MDSEB)", color: "LightSalmon" },
            { name: "MDS with excess blasts-1 (MDSEB1)", color: "LightSalmon", parent: "MDS with Excess Blasts" },
            { name: "MDS with excess blasts-2 (MDSEB2)", color: "LightSalmon", parent: "MDS with Excess Blasts" },
            { name: "MDS with Isolated Del(5q) (MDSID5Q)", color: "LightSalmon" },
            { name: "MDS with Multilineage Dysplasia (MDSMD)", color: "LightSalmon" },
            { name: "MDS with Ring Sideroblasts (MDSRS)", color: "LightSalmon" },
            { name: "MDS with Ring Sideroblasts and Multilineage Dysplasia (MDSRSMD)", color: "LightSalmon", parent: "MDS with Ring Sideroblasts" },
            { name: "MDS with Ring Sideroblasts and Single Lineage Dysplasia (MDSRSSLD)", color: "LightSalmon", parent: "MDS with Ring Sideroblasts" },
            { name: "MDS with Single Lineage Dysplasia (MDSSLD)", color: "LightSalmon" },
            { name: "MDS, Unclassifiable (MDSU)", color: "LightSalmon" },
            { name: "Refractory Cytopenia of Childhood (RCYC)", color: "LightSalmon" }
          ]
        },
        {
          name: "Myelodysplastic/Myeloproliferative Neoplasms (MDS/MPN)",
          color: "LightSalmon",
          parent: "Myelodysplastic/Myeloproliferative Neoplasms",
          children: [
            { name: "Atypical Chronic Myeloid Leukemia, BCR-ABL1- (ACML)", color: "LightSalmon", abbreviation: "aCML" },
            { name: "Chronic Myelomonocytic Leukemia (CMML)", color: "LightSalmon", code: "C3178", umls: "C0023480" },
            { name: "Chronic Myelomonocytic Leukemia-0 (CMML0)", color: "LightSalmon", parent: "Chronic Myelomonocytic Leukemia" },
            { name: "Chronic Myelomonocytic Leukemia-1 (CMML1)", color: "LightSalmon", parent: "Chronic Myelomonocytic Leukemia" },
            { name: "Chronic Myelomonocytic Leukemia-2 (CMML2)", color: "LightSalmon", parent: "Chronic Myelomonocytic Leukemia" },
            { name: "Juvenile Myelomonocytic Leukemia (JMML)", color: "LightSalmon" },
            { name: "MDS/MPN with Ring Sideroblasts and Thrombocytosis (MDSMPNRST)", color: "LightSalmon" },
            { name: "MDS/MPN, Unclassifiable (MDSMPNU)", color: "LightSalmon" }
          ]
        },
        {
          name: "Myeloid Neoplasms with Germ Line Predisposition (MNGLP)",
          color: "LightSalmon",
          parent: "Myeloid Neoplasm (MNM)"
        },
        {
          name: "Myeloid/Lymphoid Neoplasms with Eosinophilia and Rearrangement of PDGFRA/PDGFRB or FGFR1 or with PCM1-JAK2 (MLNER)",
          color: "LightSalmon",
          parent: "Myeloid Neoplasm (MNM)",
          children: [
            { name: "Myeloid/Lymphoid Neoplasms with FGFR1 Rearrangement (MLNFGFR1)", color: "LightSalmon" },
            { name: "Myeloid/Lymphoid Neoplasms with PCM1-JAK2 (MLNPCM1JAK2)", color: "LightSalmon" },
            { name: "Myeloid/Lymphoid Neoplasms with PDGFRA Rearrangement (MLNPDGFRA)", color: "LightSalmon" },
            { name: "Myeloid/Lymphoid Neoplasms with PDGFRB Rearrangement (MLNPDGFRB)", color: "LightSalmon" }
          ]
        },
        {
          name: "Myeloproliferative Neoplasms (MPN)",
          color: "LightSalmon",
          code: "C4345",
          umls: "C1292778",
          parent: "Myeloid Neoplasm (MNM)",
          children: [
            { name: "Chronic Eosinophilic Leukemia, NOS (CELNOS)", color: "LightSalmon" },
            { name: "Chronic Myelogenous Leukemia (CML)", color: "LightSalmon", code: "C3172", umls: "C0023470" },
            { name: "Chronic Myeloid Leukemia, BCR-ABL1+ (CMLBCRABL1)", color: "LightSalmon", parent: "Chronic Myelogenous Leukemia" },
            { name: "Chronic Neutrophilic Leukemia (CNL)", color: "LightSalmon" },
            { name: "Essential Thrombocythemia (ET)", color: "LightSalmon", abbreviation: "ETC" },
            { name: "Essential Thrombocythemia Myelofibrosis (ETMF)", color: "LightSalmon", parent: "Essential Thrombocythemia" },
            { name: "Myeloproliferative Neoplasms, Unclassifiable (MPNU)", color: "LightSalmon" },
            { name: "Polycythemia Vera (PV)", color: "LightSalmon", abbreviation: "PCV" },
            { name: "Polycythaemia Vera Myelofibrosis (PVMF)", color: "LightSalmon", parent: "Polycythemia Vera" },
            { name: "Primary Myelofibrosis (PMF)", color: "LightSalmon", abbreviation: "MYF" },
            { name: "Primary Myelofibrosis, Prefibrotic/Early Stage (PMFPES)", color: "LightSalmon", parent: "Primary Myelofibrosis" },
            { name: "Primary Myelofibrosis, Overt Fibrotic Stage (PMFOFS)", color: "LightSalmon", parent: "Primary Myelofibrosis" }
          ]
        }
  		]
		},
	]
	},
	{
  name: "Other (OTHER)",
  children: [
    { name: "Other Cancer",
    	color: "Black",
  		code: "C17649",
  		umls: "C0205394",
  	},
  	{
      name: "Adenocarcinoma In Situ (AIS)",
      color: "Black",
      code: "C4123",
      umls: "C0334276",
      parent: "Other Cancer"
    },
    {
      name: "Cancer of Unknown Primary (CUP)",
      color: "Black",
      code: "C3812",
      umls: "C0220647",
      parent: "Other Cancer",
      children: [
        { name: "Acinar Cell Carcinoma, NOS (ACN)", color: "Black" },
        { name: "Adenocarcinoma, NOS (ADNOS)", color: "Black" },
        { name: "Cancer of Unknown Primary, NOS (CUPNOS)", color: "Black" },
        { name: "Neuroendocrine Carcinoma, NOS (NECNOS)", color: "Black" },
        { name: "Neuroendocrine Tumor, NOS (NETNOS)", color: "Black" },
        { name: "Poorly Differentiated Carcinoma, NOS (PDC)", color: "Black" },
        { name: "Small Cell Carcinoma of Unknown Primary (SCUP)", color: "Black" },
        { name: "Squamous Cell Carcinoma, NOS (SCCNOS)", color: "Black" },
        {
          name: "Undifferentiated Malignant Neoplasm (UDMN)",
          color: "Black",
          code: "C36051",
          umls: "C1336860"
        }
      ]
    },
    {
      name: "Extra Gonadal Germ Cell Tumor (EGCT)",
      color: "Black",
      parent: "Other Cancer"
    },
    {
      name: "Mixed Cancer Types (MIXED)",
      color: "Black",
      parent: "Other Cancer"
    }
  ]
},
{
  name: "Ovary/Fallopian Tube (OVARY)",
  children: [
  {
  name: "Ovarian/Fallopian Tube Cancer",
  color: "LightBlue",
  code: "C12404",
  umls: "C0029939",
  },
    {
      name: "Ovarian Cancer, Other (OOVC)",
      color: "LightBlue",
      parent: "Ovarian/Fallopian Tube Cancer",
      children: [
        { name: "High-Grade Neuroendocrine Carcinoma of the Ovary (HGONEC)", color: "LightBlue" },
        { name: "High-Grade Serous Fallopian Tube Cancer (HGSFT)", color: "LightBlue" },
        { name: "Ovarian Choriocarcinoma, NOS (OCNOS)", color: "LightBlue" }
      ]
    },
    {
      name: "Ovarian Epithelial Tumor (OVT)",
      color: "LightBlue",
      code: "C4381",
      umls: "C0341823",
      parent: "Ovarian/Fallopian Tube Cancer",
      children: [
        { name: "Brenner Tumor (BTOV)", color: "LightBlue", code: "C39954", umls: "CL323981", children: [
          { name: "Brenner Tumor, Benign (BTBEOV)", color: "LightBlue" },
          { name: "Brenner Tumor, Borderline (BTBOV)", color: "LightBlue" },
          { name: "Brenner Tumor, Malignant (BTMOV)", color: "LightBlue" }
        ]},
        { name: "Clear Cell Borderline Ovarian Tumor (CCBOV)", color: "LightBlue", code: "C40080", umls: "C0279676" },
        { name: "Clear Cell Ovarian Cancer (CCOV)", color: "LightBlue", code: "C40076", umls: "C0346164" },
        { name: "Endometrioid Borderline Ovarian Tumor (EBOV)", color: "LightBlue", code: "C7983", umls: "C0334338" },
        { name: "Endometrioid Ovarian Cancer (EOV)", color: "LightBlue", code: "C7979", umls: "C0346163" },
        { name: "Mixed Ovarian Carcinoma (MXOV)", color: "LightBlue", code: "C40090", umls: "C0279392" },
        { name: "Mucinous Borderline Ovarian Tumor (MBOV)", color: "LightBlue", code: "C40036", umls: "C0279664" },
        { name: "Mucinous Ovarian Cancer (MOV)", color: "LightBlue", code: "C5242", umls: "C1335168" },
        { name: "Ovarian Carcinosarcoma/Malignant Mixed Mesodermal Tumor (OCS)", color: "LightBlue", code: "C9192", umls: "C0392998" },
        { name: "Ovarian Seromucinous Adenoma (OSMAD)", color: "LightBlue" },
        { name: "Ovarian Seromucinous Borderline Tumor (OSMBT)", color: "LightBlue", code: "C40038", umls: "C1511264" },
        { name: "Ovarian Seromucinous Carcinoma (OSMCA)", color: "LightBlue", code: "C40090", umls: "C0279392" },
        { name: "Serous Borderline Ovarian Tumor (SBOV)", color: "LightBlue", umls: "C0279662" },
        { name: "Serous Borderline Ovarian Tumor, Micropapillary (SBMOV)", color: "LightBlue" },
        { name: "Serous Ovarian Cancer (SOC)", color: "LightBlue", code: "C7550", umls: "C1335177", children: [
          { name: "High-Grade Serous Ovarian Cancer (HGSOC)", color: "LightBlue", umls: "CL446431" },
          { name: "Low-Grade Serous Ovarian Cancer (LGSOC)", color: "LightBlue", umls: "CL446432" }
        ]},
        { name: "Small Cell Carcinoma of the Ovary (SCCO)", color: "LightBlue", code: "C27390", umls: "C2212006" }
      ]
    },
    {
      name: "Ovarian Germ Cell Tumor (OGCT)",
      color: "LightBlue",
      code: "C3873",
      umls: "C0238324",
      parent: "Ovarian/Fallopian Tube Cancer",
      children: [
        { name: "Dysgerminoma (ODYS)", color: "LightBlue", code: "C8106", umls: "C0346185" },
        { name: "Embryonal Carcinoma (OEC)", color: "LightBlue", code: "C8108", umls: "C0346183" },
        { name: "Immature Teratoma (OIMT)", color: "LightBlue", code: "C8111", umls: "C0346182" },
        { name: "Mature Teratoma (OMT)", color: "LightBlue", code: "C8112", umls: "C1334637" },
        { name: "Mixed Germ Cell Tumor (OMGCT)", color: "LightBlue", code: "C8114", umls: "C0280135" },
        { name: "Polyembryoma (OPE)", color: "LightBlue", code: "C39990", umls: "C1514199" },
        { name: "Yolk Sac Tumor (OYST)", color: "LightBlue", code: "C8107", umls: "C0346188" }
      ]
    },
    {
      name: "Sex Cord Stromal Tumor (SCST)",
      color: "LightBlue",
      code: "C4862",
      umls: "C0600113",
      parent: "Ovarian/Fallopian Tube Cancer",
      children: [
        { name: "Fibrothecoma (FT)", color: "LightBlue", parent: "Sex Cord Stromal Tumor", umls: "MFT" },
        { name: "Gonadoblastoma (OGBL)", color: "LightBlue", code: "C39985", umls: "C1518716" },
        { name: "Granulosa Cell Tumor (GRCT)", color: "LightBlue", code: "C3070", umls: "C0018206" },
        { name: "Sertoli-Leydig Cell Tumor (SLCT)", color: "LightBlue", code: "C2880", umls: "C0003810" },
        { name: "Steroid Cell Tumor, NOS (SCT)", color: "LightBlue" }
      ]
    }
  ]
},
{
  name: "Pancreas",
  children: [
  	{
  		name: "Pancreatic Cancer",

  		 		color: "Purple",
  		code: "C12393",
  		umls: "C0030274",
  	},
    {
      name: "Acinar Cell Carcinoma of the Pancreas (PAAC)",
      color: "Purple",
      parent: "Pancreas",
      code: "C7977",
      umls: "C0279661",
      children: []
    },
    {
      name: "Adenosquamous Carcinoma of the Pancreas (PAASC)",
      color: "Purple",
      parent: "Pancreas",
      code: "C5721",
      umls: "C1335299",
      children: []
    },
    {
      name: "Cystic Tumor of the Pancreas (PACT)",
      color: "Purple",
      parent: "Pancreas",
      code: "C41247",
      umls: "C1518872",
      children: [
        {
          name: "Intraductal Oncocytic Papillary Neoplasm (IOPN)",
          color: "Purple",
          parent: "Cystic Tumor of the Pancreas (PACT)",
          children: []
        },
        {
          name: "Intraductal Papillary Mucinous Neoplasm (IPMN)",
          color: "Purple",
          parent: "Cystic Tumor of the Pancreas (PACT)",
          code: "C38342",
          umls: "C1518869",
          children: []
        },
        {
          name: "Intraductal Tubulopapillary Neoplasm (ITPN)",
          color: "Purple",
          parent: "Cystic Tumor of the Pancreas (PACT)",
          children: []
        },
        {
          name: "Mucinous Cystic Neoplasm (MCN)",
          color: "Purple",
          parent: "Cystic Tumor of the Pancreas (PACT)",
          code: "C41247",
          umls: "C1518872",
          children: []
        },
        {
          name: "Serous Cystadenoma of the Pancreas (PSC)",
          color: "Purple",
          parent: "Cystic Tumor of the Pancreas (PACT)",
          code: "C5712",
          umls: "C1335316",
          children: []
        }
      ]
    },
    {
      name: "Pancreatic Adenocarcinoma (PAAD)",
      color: "Purple",
      parent: "Pancreas",
      code: "C8294",
      umls: "C0281361",
      children: []
    },
    {
      name: "Pancreatic Neuroendocrine Carcinoma (PANEC)",
      color: "Purple",
      parent: "Pancreas",
      children: []
    },
    {
      name: "Pancreatic Neuroendocrine Tumor (PANET)",
      color: "Purple",
      parent: "Pancreas",
      code: "C27720",
      umls: "C1337011",
      children: []
    },
    {
      name: "Pancreatoblastoma (PB)",
      color: "Purple",
      parent: "Pancreas",
      code: "C4265",
      umls: "C0334489",
      children: []
    },
    {
      name: "Solid Pseudopapillary Neoplasm of the Pancreas (SPN)",
      color: "Purple",
      parent: "Pancreas",
      code: "C37212",
      umls: "C1336030",
      children: []
    },
    {
      name: "Undifferentiated Carcinoma of the Pancreas (UCP)",
      color: "Purple",
      parent: "Pancreas",
      code: "C5722",
      umls: "C1336861",
      children: [
        {
          name: "Osteoclastic Giant Cell Tumor (OSGCT)",
          color: "Purple",
          parent: "Undifferentiated Carcinoma of the Pancreas (UCP)",
          children: []
        }
      ]
    }
  ]
},
{
  name: "Penis",
  children: [
  	{
  	name: "Penile Cancer",
  	color: "Blue",
  	code: "C12409",
  	umls: "C0030851",
  	},
    {
      name: "Penile Squamous Cell Carcinoma (PSCC)",
      children: [
      	{
      	name: "Penile Squamous Cell Carcinoma (PSCC)",
      	color: "Blue",
      	parent: "Penis",
      	code: "C7729",
      	umls: "C0238348",
      	},
        {
          name: "Basaloid Penile Squamous Cell Carcinoma (BPSCC)",
          color: "Blue",
          parent: "Penile Squamous Cell Carcinoma (PSCC)",
          code: "C6980",
          umls: "C1332462",
          children: []
        },
        {
          name: "Verrucous Penile Squamous Cell Carcinoma (VPSCC)",
          color: "Blue",
          parent: "Penile Squamous Cell Carcinoma (PSCC)",
          code: "C6982",
          umls: "C1336955",
          children: []
        },
        {
          name: "Warty Penile Squamous Cell Carcinoma (WPSCC)",
          color: "Blue",
          parent: "Penile Squamous Cell Carcinoma (PSCC)",
          code: "C6981",
          umls: "C1337009",
          children: []
        }
      ]
    }
  ]
},
{
  name: "Peripheral Nervous System (PNS)",
  color: "Gray",
  code: "C12465",
  umls: "C0206417",
  children: [
    {
      name: "Ganglioneuroblastoma (GNBL)",
      color: "Gray",
      parent: "Peripheral Nervous System",
      code: "C3790",
      umls: "C0206718",
      children: []
    },
    {
      name: "Ganglioneuroma (GN)",
      color: "Gray",
      parent: "Peripheral Nervous System",
      children: []
    },
    {
      name: "Nerve Sheath Tumor (NST)",
      color: "Gray",
      parent: "Peripheral Nervous System",
      code: "C4972",
      umls: "C0206727",
      children: [
        {
          name: "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
          color: "Gray",
          parent: "Nerve Sheath Tumor (NST)",
          code: "C3798",
          umls: "C0751690",
          children: []
        },
        {
          name: "Neurofibroma (NFIB)",
          color: "Gray",
          parent: "Nerve Sheath Tumor (NST)",
          code: "C3272",
          umls: "C0027830",
          children: []
        },
        {
          name: "Schwannoma (SCHW)",
          color: "Gray",
          parent: "Nerve Sheath Tumor (NST)",
          code: "C3269",
          umls: "C0027809",
          children: [
            {
              name: "Cellular Schwannoma (CSCHW)",
              color: "Gray",
              parent: "Schwannoma (SCHW)",
              code: "C4724",
              umls: "C0431124",
              children: []
            },
            {
              name: "Melanotic Schwannoma (MSCHW)",
              color: "Gray",
              parent: "Schwannoma (SCHW)",
              code: "C6970",
              umls: "C1306247",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Neuroblastoma (NBL)",
      color: "Gray",
      parent: "Peripheral Nervous System",
      code: "C3270",
      umls: "C0027819",
      children: []
    }
  ]
},
{
  name: "Peritoneum (PERITONEUM)",
  color: "Green",
  code: "C12770",
  umls: "C0031153",
  children: [
    {
      name: "Peritoneal Mesothelioma (PEMESO)",
      color: "Green",
      parent: "Peritoneum",
      code: "C7633",
      umls: "C1377610",
      children: []
    },
    {
      name: "Peritoneal Serous Carcinoma (PSEC)",
      color: "Green",
      parent: "Peritoneum",
      children: []
    }
  ]
},
{
  name: "Pleura (PLEURA)",
  color: "Blue",
  code: "C12469",
  umls: "C0032225",
  children: [
    {
      name: "Pleural Mesothelioma (PLMESO)",
      color: "Blue",
      parent: "Pleura",
      code: "C9351",
      umls: "C1377913",
      children: [
        {
          name: "Pleural Mesothelioma, Biphasic Type (PLBMESO)",
          color: "Blue",
          parent: "Pleural Mesothelioma (PLMESO)",
          children: []
        },
        {
          name: "Pleural Mesothelioma, Epithelioid Type (PLEMESO)",
          color: "Blue",
          parent: "Pleural Mesothelioma (PLMESO)",
          children: []
        },
        {
          name: "Pleural Mesothelioma, Sarcomatoid Type (PLSMESO)",
          color: "Blue",
          parent: "Pleural Mesothelioma (PLMESO)",
          children: []
        }
      ]
    }
  ]
},
{
  name: "Prostate (PROSTATE)",
  color: "Cyan",
  code: "C12410",
  umls: "C0033572",
  children: [
    {
      name: "Basal Cell Carcinoma of Prostate (BCCP)",
      color: "Cyan",
      parent: "Prostate",
      children: []
    },
    {
      name: "Prostate Adenocarcinoma (PRAD)",
      color: "Cyan",
      parent: "Prostate",
      code: "C2919",
      umls: "C0007112",
      children: []
    },
    {
      name: "Prostate Neuroendocrine Carcinoma (PRNE)",
      color: "Cyan",
      parent: "Prostate",
      code: "C5545",
      umls: "C1335515",
      children: []
    },
    {
      name: "Prostate Small Cell Carcinoma (PRSCC)",
      color: "Cyan",
      parent: "Prostate",
      code: "C6766",
      umls: "C1300585",
      children: []
    },
    {
      name: "Prostate Squamous Cell Carcinoma (PRSC)",
      color: "Cyan",
      parent: "Prostate",
      code: "C5536",
      umls: "C1302530",
      children: []
    }
  ]
},
{
      name: "Skin",
      color: "Black",
      code: "SKIN",
      umls: "",
      children: [
        {
          name: "Skin Cancer",
          color: "Black",
          code: "C12470",
          umls: "C1123023",
          children: []
        },
        {
          name: "Aggressive Digital Papillary Adenocarcinoma (ADPA)",
          color: "Black",
          code: "C27534",
          umls: "C1367789",
          children: []
        },
        {
          name: "Atypical Fibroxanthoma (AFX)",
          color: "Black",
          code: "C4246",
          umls: "C0346053",
          children: []
        },
        {
          name: "Atypical Nevus (AN)",
          color: "Black",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Basal Cell Carcinoma (BCC)",
          color: "Black",
          code: "C2921",
          umls: "C0007117",
          children: []
        },
        {
          name: "Cutaneous Squamous Cell Carcinoma (CSCC)",
          color: "Black",
          code: "C4819",
          umls: "C0553723",
          children: []
        },
        {
          name: "Dermatofibroma (DF)",
          color: "Black",
          code: "C6801",
          umls: "C0002991",
          children: []
        },
        {
          name: "Dermatofibrosarcoma Protuberans (DFSP)",
          color: "Black",
          code: "C4683",
          umls: "C0392784",
          children: []
        },
        {
          name: "Desmoplastic Trichoepithelioma (DTE)",
          color: "Black",
          code: "C27524",
          umls: "C0432526",
          children: []
        },
        {
          name: "Endocrine Mucin Producing Sweat Gland Carcinoma (EMPSGC)",
          color: "Black",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Extramammary Paget Disease (EMPD)",
          color: "Black",
          code: "C3302",
          umls: "C0030186",
          children: []
        },
        {
          name: "Melanoma (MEL)",
          color: "Black",
          code: "C3224",
          umls: "C0025202",
          children: [
            {
              name: "Acral Melanoma (ACRM)",
              color: "Black",
              code: "C4022",
              umls: "C0346037",
              children: []
            },
            {
              name: "Congenital Nevus (SKCN)",
              color: "Black",
              code: "C3944",
              umls: "C1318558",
              children: []
            },
            {
              name: "Cutaneous Melanoma (SKCM)",
              color: "Black",
              code: "C3510",
              umls: "C0151779",
              children: []
            },
            {
              name: "Desmoplastic Melanoma (DESM)",
              color: "Black",
              code: "C37257",
              umls: "C0334439",
              children: []
            },
            {
              name: "Lentigo Maligna Melanoma (SKLMM)",
              color: "Black",
              code: "C9151",
              umls: "C2739810",
              children: []
            },
            {
              name: "Melanoma of Unknown Primary (MUP)",
              color: "Black",
              code: "",
              umls: "",
              children: []
            },
            {
              name: "Spitzoid Melanoma (SPZM)",
              color: "Black",
              code: "",
              umls: "",
              children: []
            }
          ]
        },
        {
          name: "Merkel Cell Carcinoma (MCC)",
          color: "Black",
          code: "C9231",
          umls: "C0007129",
          children: []
        },
        {
          name: "Microcystic Adnexal Carcinoma (MAC)",
          color: "Black",
          code: "C7581",
          umls: "C0346027",
          children: []
        },
        {
          name: "Porocarcinoma/Spiroadenocarcinoma (POCA)",
          color: "Black",
          code: "C5560",
          umls: "C1266065",
          children: []
        },
        {
          name: "Poroma/Acrospiroma (PORO)",
          color: "Black",
          code: "C27273",
          umls: "C1533161",
          children: []
        },
        {
          name: "Proliferating Pilar Cystic Tumor (PPCT)",
          color: "Black",
          code: "",
          umls: "C0345992",
          children: []
        },
        {
          name: "Sebaceous Carcinoma (SEBA)",
          color: "Black",
          code: "C40310",
          umls: "C0206684",
          children: []
        },
        {
          name: "Skin Adnexal Carcinoma (SKAC)",
          color: "Black",
          code: "C3775",
          umls: "C0206697",
          children: []
        },
        {
          name: "Spiroma/Spiradenoma (SPIR)",
          color: "Black",
          code: "C4170",
          umls: "C0334347",
          children: []
        },
        {
          name: "Sweat Gland Adenocarcinoma (SGAD)",
          color: "Black",
          code: "C3682",
          umls: "C1883403",
          children: []
        },
        {
          name: "Sweat Gland Carcinoma/Apocrine Eccrine Carcinoma (AECA)",
          color: "Black",
          code: "C6938",
          umls: "C1412016",
          children: []
        }
      ]
    },
    {
      name: "Soft Tissue",
      color: "LightYellow",
      code: "SOFT_TISSUE",
      umls: "",
      children: [
        {
          name: "Soft Tissue Cancer",
          color: "LightYellow",
          code: "C12471",
          umls: "C0225317",
          children: []
        },
        {
          name: "Aggressive Angiomyxoma (AA)",
          color: "LightYellow",
          code: "C6936",
          umls: "C1306242",
          children: []
        },
        {
          name: "Alveolar Soft Part Sarcoma (ASPS)",
          color: "LightYellow",
          code: "C3750",
          umls: "C0206657",
          children: []
        },
        {
          name: "Angiomatoid Fibrous Histiocytoma (AFH)",
          color: "LightYellow",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Angiosarcoma (ANGS)",
          color: "LightYellow",
          code: "C3088",
          umls: "C0018923",
          children: []
        },
        {
          name: "Atypical Lipomatous Tumor (ALT)",
          color: "LightYellow",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Clear Cell Sarcoma (CCS)",
          color: "LightYellow",
          code: "C3745",
          umls: "C0206651",
          children: []
        },
        {
          name: "Dendritic Cell Sarcoma (DCS)",
          color: "LightYellow",
          code: "C9294",
          umls: "C1334030",
          children: [
            {
              name: "Histiocytic Dendritic Cell Sarcoma (HDCS)",
              color: "LightYellow",
              code: "C27349",
              umls: "C0334663",
              children: []
            }
          ]
        },
        {
          name: "Desmoid/Aggressive Fibromatosis (DES)",
          color: "LightYellow",
          code: "C9182",
          umls: "C0079218",
          children: []
        },
        {
          name: "Desmoplastic Small-Round-Cell Tumor (DSRCT)",
          color: "LightYellow",
          code: "C8300",
          umls: "C0281508",
          children: []
        },
        {
          name: "Epithelioid Hemangioendothelioma (EHAE)",
          color: "LightYellow",
          code: "C3800",
          umls: "C0206732",
          children: []
        },
        {
          name: "Epithelioid Sarcoma (EPIS)",
          color: "LightYellow",
          code: "C3714",
          umls: "C0205944",
          children: [
          {
          name: "Proximal-Type Epithelioid Sarcoma (PTES)",
          color: "LightYellow",
          code: "",
          umls: "",
          children: []
        }
      ]
    },
    {
      name: "Ewing Sarcoma of Soft Tissue (ESST)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Fibrosarcoma (FIBS)",
      color: "LightYellow",
      code: "C3043",
      umls: "C0016057",
      children: [
        {
          name: "Sclerosing Epithelioid Fibrosarcoma (SEF)",
          color: "LightYellow",
          code: "C49027",
          umls: "C1710026",
          children: []
        }
      ]
    },
    {
      name: "Gastrointestinal Stromal Tumor (GIST)",
      color: "LightYellow",
      code: "C3868",
      umls: "C0238198",
      children: []
    },
    {
      name: "Glomangiosarcoma (GS)",
      color: "LightYellow",
      code: "C4221",
      umls: "C1266111",
      children: []
    },
    {
      name: "Hemangioma (HEMA)",
      color: "LightYellow",
      code: "C3085",
      umls: "C0018916",
      children: []
    },
    {
      name: "Infantile Fibrosarcoma (IFS)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Inflammatory Myofibroblastic Tumor (IMT)",
      color: "LightYellow",
      code: "C6481",
      umls: "C0334121",
      children: []
    },
    {
      name: "Intimal Sarcoma (INTS)",
      color: "LightYellow",
      code: "C53677",
      umls: "C1708550",
      children: []
    },
    {
      name: "Leiomyoma (LM)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Leiomyosarcoma (LMS)",
      color: "LightYellow",
      code: "C3158",
      umls: "C0023269",
      children: []
    },
    {
      name: "Liposarcoma (LIPO)",
      color: "LightYellow",
      code: "C3194",
      umls: "C0023827",
      children: [
        {
          name: "Dedifferentiated Liposarcoma (DDLS)",
          color: "LightYellow",
          code: "C3704",
          umls: "C0205824",
          children: []
        },
        {
          name: "Myxoid/Round-Cell Liposarcoma (MRLS)",
          color: "LightYellow",
          code: "C27781",
          umls: "C0206634",
          children: []
        },
        {
          name: "Pleomorphic Liposarcoma (PLLS)",
          color: "LightYellow",
          code: "C3705",
          umls: "C0205825",
          children: []
        },
        {
          name: "Well-Differentiated Liposarcoma (WDLS)",
          color: "LightYellow",
          code: "C4250",
          umls: "C1370889",
          children: []
        }
      ]
    },
    {
      name: "Low-Grade Fibromyxoid Sarcoma (LGFMS)",
      color: "LightYellow",
      code: "C45202",
      umls: "C1275282",
      children: []
    },
    {
      name: "Malignant Glomus Tumor (MGST)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Myofibroma (MF)",
      color: "LightYellow",
      code: "C7052",
      umls: "C1266121",
      children: []
    },
    {
      name: "Myofibromatosis (IMS)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Myopericytoma (MPC)",
      color: "LightYellow",
      code: "C50401",
      umls: "C1302808",
      children: []
    },
    {
      name: "Myxofibrosarcoma (MFS)",
      color: "LightYellow",
      code: "C6496",
      umls: "C0334454",
      children: []
    },
    {
      name: "Myxoma (MYXO)",
      color: "LightYellow",
      code: "C6577",
      umls: "C0027149",
      children: [
        {
          name: "Ossifying Fibromyxoid Tumor (OFMT)",
          color: "LightYellow",
          code: "C6582",
          umls: "C1266128",
          children: []
        }
      ]
    },
    {
      name: "Paraganglioma (PGNG)",
      color: "Gray",
      code: "C3308",
      umls: "C0030421",
      children: []
    },
    {
      name: "Perivascular Epithelioid Cell Tumor (PECOMA)",
      color: "LightYellow",
      code: "C38150",
      umls: "C1300127",
      children: []
    },
    {
      name: "Pseudomyogenic Hemangioendothelioma (PMHE)",
      color: "LightYellow",
      code: "",
      umls: "CL479537",
      children: []
    },
    {
      name: "Radiation-Associated Sarcoma (RAS)",
      color: "LightYellow",
      code: "C93125",
      umls: "C2985448",
      children: []
    },
    {
      name: "Rhabdomyosarcoma (RMS)",
      color: "LightYellow",
      code: "C3359",
      umls: "C0035412",
      children: [
        {
          name: "Alveolar Rhabdomyosarcoma (ARMS)",
          color: "LightYellow",
          code: "C3749",
          umls: "C0206655",
          children: []
        },
        {
          name: "Embryonal Rhabdomyosarcoma (ERMS)",
          color: "LightYellow",
          code: "C8971",
          umls: "C0206656",
          children: []
        },
        {
          name: "Pleomorphic Rhabdomyosarcoma (PLRMS)",
          color: "LightYellow",
          code: "C4258",
          umls: "C0334480",
          children: []
        },
        {
          name: "Spindle Cell Rhabdomyosarcoma (SCRMS)",
          color: "LightYellow",
          code: "C6519",
          umls: "C1266134",
          children: []
        },
        {
          name: "Spindle Cell/Sclerosing Rhabdomyosarcoma (SCSRMS)",
          color: "LightYellow",
          code: "",
          umls: "CL494117",
          children: []
        }
      ]
    },
    {
      name: "Round Cell Sarcoma, NOS (RCSNOS)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Sarcoma, NOS (SARCNOS)",
      color: "LightYellow",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Soft Tissue Myoepithelial Carcinoma (STMYEC)",
      color: "LightYellow",
      code: "C7596",
      umls: "C0334699",
      children: []
    },
    {
      name: "Solitary Fibrous Tumor/Hemangiopericytoma (SFT)",
      color: "LightYellow",
      code: "C7634",
      umls: "C1266119",
      children: []
    },
    {
      name: "Synovial Sarcoma (SYNS)",
      color: "LightYellow",
      code: "C3400",
      umls: "C0039101",
      children: []
    },
    {
      name: "Tenosynovial Giant Cell Tumor Diffuse Type (TGCT)",
      color: "LightYellow",
      code: "C3401",
      umls: "C0039106",
      children: []
    },
    {
    	name: "Undifferentiated Pleomorphic Sarcoma/Malignant Fibrous Histiocytoma/High-Grade Spindle Cell Sarcoma (MFH)",
			color: "LightYellow",
      code: "C4247",
      umls: "C0334463",
      children: []
    },
  ]
 },
 {
  name: "Testis",
  color: "Red",
  code: "C12412",
  umls: "C0039597",
  children: [
    {
      name: "Non-Seminomatous Germ Cell Tumor (NSGCT)",
      color: "Red",
      code: "",
      umls: "CL480935",
      children: [
        {
          name: "Choriocarcinoma (TCCA)",
          color: "Red",
          code: "C7733",
          umls: "C0238449",
          children: []
        },
        {
          name: "Embryonal Carcinoma (EMBCA)",
          color: "Red",
          code: "C6341",
          umls: "C0238448",
          children: []
        },
        {
          name: "Germ Cell Tumor with Somatic-Type Malignancy (GCTSTM)",
          color: "Red",
          code: "",
          umls: "TMT",
          children: []
        },
        {
          name: "Mixed Germ Cell Tumor (MGCT)",
          color: "Red",
          code: "C6347",
          umls: "C1336720",
          children: []
        },
        {
          name: "Teratoma (TT)",
          color: "Red",
          code: "C3877",
          umls: "C0238451",
          children: []
        },
        {
          name: "Yolk Sac Tumor (TYST)",
          color: "Red",
          code: "C8000",
          umls: "C0279708",
          children: []
        }
      ]
    },
    {
      name: "Seminoma (SEM)",
      color: "Red",
      code: "C9309",
      umls: "C0036631",
      children: []
    },
    {
      name: "Sex Cord Stromal Tumor (TSCST)",
      color: "Red",
      code: "",
      umls: "C1336728",
      children: []
    },
    {
      name: "Testicular Lymphoma (TLYM)",
      color: "Red",
      code: "C6810",
      umls: "C0349644",
      children: []
    },
    {
      name: "Testicular Mesothelioma (TMESO)",
      color: "Red",
      code: "",
      umls: "",
      children: []
    }
  ]
},
{
  name: "Thymus",
  color: "Purple",
  code: "C12433",
  umls: "C0040113",
  children: [
    {
      name: "Thymic Epithelial Tumor (TET)",
      color: "Purple",
      code: "C6450",
      umls: "C1266101",
      children: [
        {
          name: "Thymic Carcinoma (THYC)",
          color: "Purple",
          code: "C7569",
          umls: "C0205969",
          children: []
        },
        {
          name: "Thymoma (THYM)",
          color: "Purple",
          code: "C3411",
          umls: "C0040100",
          children: []
        }
      ]
    },
    {
      name: "Thymic Neuroendocrine Tumor (TNET)",
      color: "Purple",
      code: "",
      umls: "",
      children: []
    }
  ]
},
{
  name: "Thyroid",
  color: "Teal",
  code: "C12400",
  umls: "C0040132",
  children: [
    {
      name: "Anaplastic Thyroid Cancer (THAP)",
      color: "Teal",
      code: "C3878",
      umls: "C0238461",
      children: []
    },
    {
      name: "Hurthle Cell Thyroid Cancer (THHC)",
      color: "Teal",
      code: "C4946",
      umls: "C0749424",
      children: []
    },
    {
      name: "Hyalinizing Trabecular Adenoma of the Thyroid (HTAT)",
      color: "Teal",
      code: "C6846",
      umls: "C1266049",
      children: []
    },
    {
      name: "Medullary Thyroid Cancer (THME)",
      color: "Teal",
      code: "C3879",
      umls: "C0238462",
      children: []
    },
    {
      name: "Oncocytic Adenoma of the Thyroid (OAT)",
      color: "Teal",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Poorly Differentiated Thyroid Cancer (THPD)",
      color: "Teal",
      code: "C6040",
      umls: "C1266050",
      children: []
    },
    {
      name: "Well-Differentiated Thyroid Cancer (WDTC)",
      color: "Teal",
      code: "C7153",
      umls: "C1337013",
      children: [
        {
          name: "Follicular Thyroid Cancer (THFO)",
          color: "Teal",
          code: "C8054",
          umls: "C0206682",
          children: []
        },
        {
          name: "Papillary Thyroid Cancer (THPA)",
          color: "Teal",
          code: "C4035",
          umls: "C0238463",
          children: []
        }
      ]
    }
  ]
},
{
  name: "Uterus",
  color: "PeachPuff",
  code: "C12405",
  umls: "C0042149",
  children: [
    {
      name: "Endometrial Carcinoma (UCEC)",
      color: "PeachPuff",
      code: "C7558",
      umls: "C0476089",
      children: [
        {
          name: "Poorly Differentiated Carcinoma of the Uterus (UPDC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Adenosquamous Carcinoma (UASC)",
          color: "PeachPuff",
          code: "C4519",
          umls: "C0346202",
          children: []
        },
        {
          name: "Uterine Carcinosarcoma/Uterine Malignant Mixed Mullerian Tumor (UCS)",
          color: "PeachPuff",
          code: "C42700",
          umls: "C0280630",
          children: []
        },
        {
          name: "Uterine Clear Cell Carcinoma (UCCC)",
          color: "PeachPuff",
          code: "C6344",
          umls: "C1332912",
          children: []
        },
        {
          name: "Uterine Dedifferentiated Carcinoma (UDDC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Endometrioid Carcinoma (UEC)",
          color: "PeachPuff",
          code: "C6287",
          umls: "C1336905",
          children: []
        },
        {
          name: "Uterine Mesonephric Carcinoma (UMNC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Mixed Endometrial Carcinoma (UMEC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Mucinous Carcinoma (UMC)",
          color: "PeachPuff",
          code: "C40144",
          umls: "C0854923",
          children: []
        },
        {
          name: "Uterine Neuroendocrine Carcinoma (UNEC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Serous Carcinoma/Uterine Papillary Serous Carcinoma (USC)",
          color: "PeachPuff",
          code: "C27838",
          umls: "C0854924",
          children: []
        },
        {
          name: "Uterine Undifferentiated Carcinoma (UUC)",
          color: "PeachPuff",
          code: "C6345",
          umls: "C0850327",
          children: []
        }
      ]
    },
    {
      name: "Gestational Trophoblastic Disease (GTD)",
      color: "PeachPuff",
      code: "C4699",
      umls: "C1135868",
      children: [
        {
          name: "Choriocarcinoma (UCCA)",
          color: "PeachPuff",
          code: "C27246",
          umls: "C0279677",
          children: []
        },
        {
          name: "Epithelioid Trophoblastic Tumor (ETT)",
          color: "PeachPuff",
          code: "C6900",
          umls: "C1266159",
          children: []
        },
        {
          name: "Molar Pregnancy (MP)",
          color: "PeachPuff",
          code: "C3110",
          umls: "C0020217",
          children: [
            {
              name: "Complete Hydatidiform Mole (CHM)",
              color: "PeachPuff",
              code: "C4871",
              umls: "C0678213",
              children: []
            },
            {
              name: "Invasive Hydatidiform Mole (IHM)",
              color: "PeachPuff",
              code: "C6985",
              umls: "C0008493",
              children: []
            },
            {
              name: "Partial Hydatidiform Mole (PHM)",
              color: "PeachPuff",
              code: "C4293",
              umls: "C0334529",
              children: []
            }
          ]
        },
        {
          name: "Placental Site Trophoblastic Tumor (PSTT)",
          color: "PeachPuff",
          code: "C3757",
          umls: "C0206666",
          children: []
        }
      ]
    },
    {
      name: "Other Uterine Tumor (OUTT)",
      color: "PeachPuff",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Uterine Sarcoma/Mesenchymal (USARC)",
      color: "PeachPuff",
      code: "C6339",
      umls: "C0338113",
      children: [
        {
          name: "Endometrial Stromal Sarcoma (ESS)",
          color: "PeachPuff",
          code: "C8973",
          umls: "C0206630",
          children: [
            {
              name: "High-Grade Endometrial Stromal Sarcoma (HGESS)",
              color: "PeachPuff",
              code: "",
              umls: "",
              children: []
            },
            {
              name: "Low-Grade Endometrial Stromal Sarcoma (LGESS)",
              color: "PeachPuff",
              code: "C4263",
              umls: "C0334486",
              children: []
            }
          ]
        },
        {
          name: "Undifferentiated Uterine Sarcoma (UUS)",
          color: "PeachPuff",
          code: "C8972",
          umls: "CL033042",
          children: []
        },
        {
          name: "Uterine Adenosarcoma (UAS)",
          color: "PeachPuff",
          code: "C6336",
          umls: "C1336917",
          children: []
        },
        {
          name: "Uterine Perivascular Epithelioid Cell Tumor (UPECOMA)",
          color: "PeachPuff",
          code: "C40180",
          umls: "C1519862",
          children: []
        },
        {
          name: "Uterine Sarcoma, Other (OUSARC)",
          color: "PeachPuff",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Uterine Smooth Muscle Tumor (USMT)",
          color: "PeachPuff",
          code: "C40176",
          umls: "C1519863",
          children: [
            {
              name: "Uterine Epithelioid Leiomyosarcoma (UELMS)",
              color: "PeachPuff",
              code: "C40174",
              umls: "C1519851",
              children: []
            },
            {
              name: "Uterine Leiomyoma (ULM)",
              color: "PeachPuff",
              code: "C3434",
              umls: "C0042133",
              children: []
            },
            {
              name: "Uterine Leiomyosarcoma (ULMS)",
              color: "PeachPuff",
              code: "C6340",
              umls: "C0280631",
              children: []
            },
            {
              name: "Uterine Myxoid Leiomyosarcoma (UMLMS)",
              color: "PeachPuff",
              code: "C40175",
              umls: "C1519861",
              children: []
            },
            {
              name: "Uterine Smooth Muscle Tumor of Uncertain Malignant Potential (USTUMP)",
              color: "PeachPuff",
              code: "",
              umls: "",
              children: []
            }
          ]
        }
      ]
    }
  ]
},
{
  name: "Vulva/Vagina",
  color: "Purple",
  code: "C12408",
  umls: "C0042993",
  children: [
    {
      name: "Germ Cell Tumor of the Vulva (VGCT)",
      color: "Purple",
      code: "",
      umls: "",
      children: [
        {
          name: "Dysgerminoma (VDYS)",
          color: "Purple",
          code: "C8106",
          umls: "C0346185",
          children: []
        },
        {
          name: "Embryonal Carcinoma (VOEC)",
          color: "Purple",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Immature Teratoma (VIMT)",
          color: "Purple",
          code: "C4286",
          umls: "C0334520",
          children: []
        },
        {
          name: "Mature Teratoma (VMT)",
          color: "Purple",
          code: "C9015",
          umls: "C1368910",
          children: []
        },
        {
          name: "Mixed Germ Cell Tumor (VMGCT)",
          color: "Purple",
          code: "C4290",
          umls: "C0334524",
          children: []
        },
        {
          name: "Polyembryoma (VPE)",
          color: "Purple",
          code: "",
          umls: "",
          children: []
        },
        {
          name: "Yolk Sac Tumor (VYST)",
          color: "Purple",
          code: "C6379",
          umls: "C1336945",
          children: []
        }
      ]
    },
    {
      name: "Mucinous Adenocarcinoma of the Vulva/Vagina (VMA)",
      color: "Purple",
      code: "C40252",
      umls: "C1519925",
      children: []
    },
    {
      name: "Mucosal Melanoma of the Vulva/Vagina (VMM)",
      color: "Purple",
      code: "C27394",
      umls: "C2004576",
      children: []
    },
    {
      name: "Poorly Differentiated Vaginal Carcinoma (VPDC)",
      color: "Purple",
      code: "",
      umls: "",
      children: []
    },
    {
      name: "Squamous Cell Carcinoma of the Vulva/Vagina (VSC)",
      color: "Purple",
      code: "C7736",
      umls: "C0238518",
      children: []
    },
    {
      name: "Vaginal Adenocarcinoma (VA)",
      color: "Purple",
      code: "C7981",
      umls: "C0279668",
      children: []
    }
  ]
}




];


        function createTree(data, parentElement) {
            const ul = document.createElement('ul');
            ul.className = parentElement === treeContainer ? '' : 'nested';
            parentElement.appendChild(ul);

            data.forEach(item => {
                const li = document.createElement('li');
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.appendChild(checkbox);

                if (item.children && item.children.length > 0) {
                    const span = document.createElement('span');
                    span.className = 'toggle';
                    span.textContent = item.name;
                    li.appendChild(span);
                    createTree(item.children, li);
                } else {
                    label.appendChild(document.createTextNode(item.name));
                    li.appendChild(label);
                }

                ul.appendChild(li);
            });
        }

        const treeContainer = document.getElementById('tree');
        createTree(data, treeContainer);

        // Add click event listener for toggling
        treeContainer.addEventListener('click', function(event) {
            if (event.target.tagName.toLowerCase() === 'span' && event.target.classList.contains('toggle')) {
                event.target.classList.toggle('toggle-down');
                event.target.parentElement.querySelector('.nested').classList.toggle('active');
            }
        });
