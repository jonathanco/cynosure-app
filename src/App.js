import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import ReactCompareImage from 'react-compare-image';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      categories: [
          {
            "id": 1,
            "slug": "body-contouring",
            "title": "Body Contouring",
            "desc": "Body image will always be high priority. Help patients target problem areas and achieve their desired shape.",
            "img": "/imgs/category_1.jpg"
          },
          {
            "id": 2,
            "slug": "hair-removal",
            "title": "Hair Removal",
            "desc": "Hair removal makes up more than 40% of all non-invasive treatments – see how our innovations give you an edge.",
            "img": "/imgs/category_2.jpg"
          },
          {
            "id": 3,
            "slug": "skin-revitalization",
            "title": "Skin Revitalization",
            "desc": "With over $390m spent in 2017, learn how we're leading the way with light-based laser technology.",
            "img": "/imgs/category_3.jpg"
          },
          {
            "id": 4,
            "slug": "tattoo-removal",
            "title": "Tattoo Removal",
            "desc": "From permanent to gone – help patients remove unwanted body ink with Cynosure's leading-edge technologies.",
            "img": "/imgs/category_4.jpg"
          },
          {
            "id": 5,
            "slug": "vein-treatments",
            "title": "Vein Treatments",
            "desc": "From pigmented lesions to birthmark removal, offer patients popular vascular treatments which increased 14.6% in 2017 and continues to grow.",
            "img": "/imgs/category_5.jpg"
          }
      ],
      products: [
        {
          "id": 1,
          "categories_ids": [1],
          "slug": "cellulaze",
          "title": "Cellulaze®",
          "desc": "A minimally invasive treatment that effectively targets cellulite precisely at the source.",
          "info": "Cynosure's breakthrough minimally invasive cellulite treatment hyper-targets cellulite precisely at the source, as well as in the underlying structural tissue, providing long-term results after just one treatment.",
          "img": "/imgs/p_1.png",
          "img_big": "/imgs/p_1_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Treating cellulite, re-imagined</strong><p>The Cellulaze workstation is unlike any on the market today. Using a 1440 nm wavelength and SideLaze3D™ side-firing fiber, the all-in-one treatment thermally subcises the fibrous septae, targets pockets of bulging fat and increases collagen and elastin in the dermis.</p><strong>How Cellulaze works</strong><p>Cellulaze is a multi-targeted approach to elevate treatment of cellulite for superior results.</p><ul> <li>Targets Fat: Downward facing beam to coagulate fatty tissue</li><li>Thermally Subcises Fibrous Septae: Sideways facing aiming beam to subcise the brous septae</li><li>Thermal Energy Delivered to Dermis: Upward facing aiming beam to thermally stimulate collagen production</li></ul><strong>Intelligent delivery systems. Safe treatments. Clinical endpoints, achieved.</strong><p>Incorporating additional technology and innovation for safety, optimization and patient satisfaction.</p><ul> <li>SmartSense™ Delivery System distributes precise energy by measuring motion and delivery of laser power.</li><li>ThermaGuide™ Temperature sensing cannula provides temperature feedback to deliver the appropriate level of laser energy.</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Cellulaze.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Cellulaze.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": " <ul><li>Long-term improvement in the apperance of cellulite</li></ul>"
            },
            {
              "id": 4,
              "title": "Accessories",
              "html": "<div class='accessori'> <strong>Smartlipo and Cellulaze with SmartSense</strong><div> <img src='https://www.cynosure.com/wp-content/uploads/2018/09/SmartSense.jpg' alt=''><p> Cynosure’s revolutionary Smartlipo™ LaserBodySculpting™ platform is even more precise thanks to SmartSense™—an intelligent handpiece delivery system for Smartlipo™ and Cellulaze that distributes precise energy for optimal results.</p></div></div><div class='accessori'> <strong>ThermaGuide</strong><div> <img src='https://www.cynosure.com/wp-content/uploads/2018/09/ThermaGuide.jpg' alt=''><p> Designed to be used with our Smartlipo family of lasers, the ThermaGuide temperature-sensing cannula profiles subdermal temperatures during laser-assisted lipolysis, body contouring, and small area procedures. Smartsense with ThermaGuide is the only device on the market today that incorporates intelligent sensing near the treatment end of the cannula.</p></div></div>"
            },
            {
              "id": 5,
              "title": "Clinical Data",
              "html": "<p>Cellulaze is supported by extensive clinical data, ranging from white papers to three-year clinical studies published in respected journals. The appeal of Cellulaze is not simply the excellent clinical results, but also the numerous peer-reviewed papers and podium presentations on this innovative technology. The list below is just a glance at some of the leading published studies on Cellulaze and the effects of the 1440 nm wavelength.</p><ol> <li>DiBernardo BE, MD. Cellulite Treatment using the Nd:YAG 1440 nm Wavelength Laser with side-firing fiber: 3-year follow-up. Plastic Surgery Pulse News. 2013</li><li>DiBernardo BE, MD. Treatment of Cellulite Using a 1440-nm Pulsed Laser with One-Year Follow-Up. Aesthetic Surgery Journal. 2011.</li><li>Burns, MD. Commentary on: Treatment of Cellulite Using a 1440-nm Pulsed Laser with One-Year Follow-Up: Preliminary Report. Aesthetic Surgery Journal. 2011.</li><li>Sattler, MD. Cellulaze Affects Paradigm Shift in Cellulite Treatment. The European Aesthetic Guide. 2011</li><li>Jesitus, MD. Cellulite Wars: New 1,440 nm laser battles back; one-year results encouraging. Cosmetic Surgery Times. 2011</li><li>Sasaki, MD, Tevez, MD, Ha, MD, et al. Treatment of Grade II-III Cellulite using a Minimally Invasive 1440nm Pulsed Nd:YAG Laser with Eighteen-Month Follow Up. Multicenter Study. Data on File.</li><li>Cellulaze™ Cellulite Workstation; Transforming the Way You Treat Cellulite. Data on file.</li><li>Cynosure Introduces Cellulaze. Data on File</li><li>Cellulaze™ Cellulite Laser Workstation; For the Treatment of Cellulite. Data on file.</li><li>CellulazeTM Cellulite Laser Workstation; For the Treatment of Cellulite. Data on file.</li></ol>"
            }
          ]
        },
        {
          "id": 2,
          "categories_ids": [1],
          "slug": "precisiontx",
          "title": "PrecisionTx®",
          "desc": "Cutting edge technology for high demand lower face and neck revitalization treatments.",
          "info": "Harness the cutting edge of our PrecisionTx technology to enhance your practice with one of today’s most in–demand procedures—lower face and neck revitalization.",
          "img": "/imgs/p_2.png",
          "img_big": "/imgs/p_2_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Targeted precision. Ultimate control.</strong><p>Treat smaller areas and benefit from more focused tissue targeting. Our PrecisionTx 1440nm wavelength laser is highly absorbed by water and creates a photomechanical effect, which produces bi-directional energy distribution for effective treatments.</p><strong>Define and lift without surgery</strong><p>The benefits of PrecisionTx treatments in the lower face and neck continue to improve over time.</p><ul> <li>Heat stimulates collagen production which leads to skin thickening and tissue retraction</li><li>A recent study demonstrated 29% increased skin thickness three months post treatment</li></ul><strong>Deliver outcomes safely</strong><ul> <li>1440nm wavelength to target tissue</li><li>Shorter cannula for smaller treatment areas</li><li>SideLaze800™ side-firing fiber for unmatched precision</li><li>ThermaGuide™ temperature sensing cannula for increased safety</li></ul><strong>Easily and effectively treat hyperhidrosis</strong><p>For patients suffering from excessive sweating, PrecisionTx treatments offer an innovative toxin-free treatment that coagulates and ablates soft tissue of the axillary glands. Results can be seen in as little as a week, and more consistently seen up to one year post treatment.</p>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Precisiontx.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Precisiontx.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Precisiontx-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Precisiontx-3.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Revitalization of the neck, nape and jaw line</li><li>Hyperhidrosis: Primary axillary gland ablation</li></ul>"
            },
            {
              "id": 4,
              "title": "Accessories",
              "html": "<div class='accessori'> <strong>ThermaGuide</strong><div> <img src='https://www.cynosure.com/wp-content/uploads/2018/09/ThermaGuide.jpg' alt=''><p> Designed to be used with our Smartlipo family of lasers, the ThermaGuide temperature-sensing cannula profiles subdermal temperatures during laser-assisted lipolysis, body contouring, and small area procedures. Smartsense with ThermaGuide is the only device on the market today that incorporates intelligent sensing near the treatment end of the cannula.</p></div></div>"
            },
            {
              "id": 5,
              "title": "Clinical Data",
              "html": "<p>PrecisionTx and the 1440nm wavelength are supported by extensive clinical data, ranging from white papers to clinical studies published in respected journals. The list below is just a sample of some of the leading published studies on PrecisionTx and the effects of the 1440nm wavelength.</p><ol> <li>Sasaki G, MD, Tevez, MD, Ha, MD, et al. Clinical Experience using the 1440nm Wavelength with SideLaze800™ Delivery System for Facial Contouring. Data on file.</li><li>Goldman, MD, Wollina, MD. Subdermal Nd:YAG Laser for Axillary Hyperhidrosis. Dermatol Surg. 2008.</li><li>DiBernardo, BE, MD. The aging neck: A diagnostic approach to surgical and nonsurgical options. Journal of Cosmetic and Laser Therapy, 2013; 15: 56–64.</li><li>Caplin, D, MD. Treatment of sweat glands associated with excessive sweating with unique targeted laser energy through SideLaze800 delivery system. Data on file.</li><li>DiBernardo, BE, MD. Treatment of Cellulite with One Year follow-up using a 1440nm pulse laser. Aesthetic Surgery Journal. 2011.</li></ol><small>White Papers</small><ol> <li>Clinical Experience using the1440nm Wavelength with SideLaze800™ Delivery System for Facial Contouring, Gordon H. Sasaki, MD, FACS.</li></ol>"
            }
          ]
        },
        {
          "id": 3,
          "categories_ids": [1],
          "slug": "sculpsure",
          "title": "SculpSure®",
          "desc": "World’s first FDA-cleared laser treatment for non-invasive body and submental contouring.",
          "info": "SculpSure is the world’s first FDA-cleared laser treatment for non-invasive lipolysis of the abdomen, flanks, back, inner thighs, outer thighs and submental area.",
          "img": "/imgs/p_3.png",
          "img_big": "/imgs/p_3_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>How SculpSure works</strong><p>The 1060nm wavelength’s specific affinity for adipose tissue, coupled with minimal absorption in the dermis, allows SculpSure to efficiently treat areas of troublesome fat in just 25 minutes per treatment. Over time, the body naturally eliminates the disrupted fat cells with results seen as quickly as 6 weeks and optimal results usually seen in as few as 12 weeks.</p><ul> <li>Minimal absorption in the dermis leaves the skin’s surface unharmed</li><li>Advanced Contact Cooling™ enhances patient comfort</li><li>Feathering of heat spread provides natural-looking results</li><li>Mild and transient side effects</li></ul><strong>SculpSure Submental fat treatment</strong><p>Our Submental applicator design is perfect for providing precise and effective treatments resulting in a slimmer appearance of the chin and neck. The addition of SculpSure Submental makes SculpSure an all-encompassing, non-invasive body contouring system.</p><ul> <li>100% patient satisfaction rating in clinical study</li><li>FDA-cleared for individuals with a BMI up to 43</li></ul><strong>Maximum results. Maximize success.</strong><ul> <li>Fast, 25-minute treatment per area</li><li>Versatile applicators to fit a variety of body shapes and sizes</li><li>High ROI to increase your patient revenues faster</li><li>Dedicated SculpSure support team to ensure clinical and marketing success</li><li>Direct to consumer marketing to drive awareness and leads</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-SculpSure-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-SculpSure-3.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-SculpSure-4.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-SculpSure-4.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-SculpSure-5.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-SculpSure-5.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-SculpSure.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-SculpSure.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-SculpSure-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-SculpSure-2.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Non-invasive lipolysis of the flanks, abdomen and submental</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p>SculpSure is supported by extensive clinical data.</p><ol> <li>Decorato JW, Sierra R, Chen, B. Clinical and Histological Evaluations of a 1060nm Laser Device for Non-Invasive Fat Reduction. Paper presented at: 2014 Annual American Society for Laser Medicine and Surgery Conference; April 2-6; Phoenix, AZ.</li><li>Katz B, Doherty S. A multicenter study of the safety and efficacy of a non-invasive 1060 nm diode laser for fat reduction of the flanks. Paper presented at: 2015 Annual American Society for Laser Medicine and Surgery Conference; April 22-26; Kissimmee, FL.</li><li>Bass L, Doherty S. Non-Invasive Fat Reduction of the Abdomen with a 1060nm Diode Laser. Paper presented at: 2015 Annual American Society for Laser Medicine and Surgery Conference; April 22-26; Kissimmee, FL.</li><li>Decorato, J. W., Chen, B., & Sierra, R. (2017). Subcutaneous adipose tissue response to a non-invasive hyperthermic treatment using a 1060 nm laser. Lasers in Surgery and Medicine, 49(5), 480-489. doi:10.1002/lsm.22625.<a href='https://www.ncbi.nlm.nih.gov/pubmed/28103642'>https://www.ncbi.nlm.nih.gov/pubmed/28103642</a></li><li>Schilling, L., MD, Saedi, N., MD, & Weiss, R., MD. (2017). 1060 nm Diode Hyperthermic Laser Lipolysis: The Latest in Non-Invasive Body Contouring. Journal of Drugs in Dermatology, 16(1), 48-72..<a href='http://jddonline.com/articles/dermatology/S1545961616P0048X'>http://jddonline.com/articles/dermatology/S1545961616P0048X</a></li></ol>"
            }
          ]
        },
        {
          "id": 4,
          "categories_ids": [1],
          "slug": "smartlipo-triplex",
          "title": "Smartlipo® Triplex®",
          "desc":"The gold standard in laser lipolysis technology in one dynamic, hard-working workstation.",
          "info": "With three unique wavelengths and intelligent delivery systems, it’s no wonder our Smartlipo Triplex Workstation is leading the charge in laser lipolysis.",
          "img": "/imgs/p_4.png",
          "img_big": "/imgs/p_4_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Designed with your patient’s needs in mind.</strong><p>This flexible system offers 1064nm, 1320nm and 1440nm wavelengths which can be used in single or blended mode. By customizing the wavelengths based on the treatment and patient type, Smartlipo Triplex offers:</p><ul> <li>Tissue retraction through soft tissue coagulation</li><li>Reliable, controlled energy delivery</li><li>Reduced liposuction procedure time and patient downtime</li><li>Less bleeding and bruising than traditional liposuction</li></ul><strong>Intelligent delivery. Optimal outcomes.</strong><p>Additional technology incorporated to increase safety, optimization and satisfaction:</p><ul> <li>SmartSense™ Delivery System distributes precise energy by measuring motion and delivery of laser power.</li><li>ThermaGuide Temperature sensing cannula provides temperature feedback to deliver the appropriate level of laser energy.</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Smartlipo.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Smartlipo.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Smartlipo4.jpg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Smartlipo4.jpg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Minimally invasive, laser assisted lipolysis</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p>The performance of the Smartlipo product portfolio is driven by more than ten years of clinical study and evidence-based scientific data.</p><ol> <li>Anderson RR et al. “Selective Photothermolysis of Lipid Rich Tissues: A Free Electron Laser Study.” Laser in Surgery and Medicine. 38:913–919 (2006).</li><li>Pfelberg DB et al. “Progress Report on Multicenter Study of Laser Assisted Liposuction.” Aesth Plast Surg. 18:259–264, 1994.</li><li>Badin AZED, Gondek LBE, Garcia MJ, do Valle LC, Flizikowski FBZ, de Noronha L. “Analysis of laser lipolysis effects on human tissue samples obtained from liposuction.” Aesth Plast Surg. 2005; 29:281–286.</li><li>Badin AZED, Morales LM, Gondek L, Chiaratti MG, Canta L. “Laser Lipolysis: Flaccidity Under Control.” Aesth Plast Surg. 2002; 26:335–339.</li><li>Caplin DA, Perlyn, CA. “Rejuvenation of the Aging Neck: Current Principles, Techniques, and Newer Modifications.” Facial Plast Surg Clin N Am 17 (2009) 589–601.</li><li>Collawn SS “Skin Tightening with Fractional Lasers, Radiofrequency and Smartlipo.” Annals of Plastic Surgery. Volume 64 Number 5 May 2010.</li><li>DiBernardo BE, Reyes J, Chen B. “Evaluation of tissue thermal effects from 1064/1320nm laser assisted lipolysis and its clinical implications.” Journal of Cosmetic and Laser Therapy. 2009; 11:62–69</li><li>DiBernardo BE, Reyes J. ”Evaluation of Skin Tightening After Laser Assisted Liposuction.” Aesthetic Surgery Journal. October 2009; 29:5: 400–407.</li><li>Goldman A. “Submental Nd:YAG laser-assisted liposuction.” Laser Surg Med. 2006; 38:181-184. Goldman A, Gotkin RH, Sarnoff DS, Prati C, Rossato F. “Cellulite: A New Treatment Approach Combining Subdermal Nd:YAG</li><li>Laser Lipolysis and Autologus Fat Transplantation.” Aesthetic Surgery Journal. 2008 Vol.28 Number 6: 656–662.</li><li>Goldman A, Gotkin RH, “Laser-Assisted Liposuction.” Clinical Plastic Surgery. 36(2009) 241–253.</li><li>Goldman A, Schavelzon DE, Blugerman GS. Laser lipolysis: liposuction using Nd-YAG laser. Rev Soc Cir Plást. Jan/abr 2002;17(1):17–26.</li><li>Goldman A, Wollina U. Subdermal Nd-YAG laser for axillary hyperhidrosis. Dermatol Surg. 2008;34:1–7.</li><li>Goldman A, Wollina U “Lipoma treatment with Subdermal Nd:YAG laser treatment.” International Journal of Dermatology. 2009: 48, 1228–1232.</li><li>Ichikawa K, Miyasaka M, Tanaka R, Tanino R, Mizukami K, Wakaki M. Histologic evaluation of the pulsed Nd:YAG laser for laser lypolysis. Laser Surg Med. 2005; 36:43-46.</li><li>Ichikawa K, Tanino R, Wakaki M. Histologic and photonic evaluation of a pulsed Nd:YAG laser for ablation of subcutaneous adipose tissue. Tokai J Exp Clin Med. 2006;31(4):136–140.</li><li>Katz B, McBean J. The new laser liposuction for men. Dermatol Ther. 2007; 20:448–451.</li><li>Katz B, McBean J. “Laser-assisted lipolysis: A report on complications.” Journal of Cosmetic and Laser Therapy. 2008; 10:231–233.</li><li>Katz B, McBean J. “A pilot study of the efficacy of a 1064nm and 1320nm sequentially firing Nd:YAG Laser Device for Lipolysis and skin tightening.” Lasers in Surgery and Medicine. 41:779–784 December 2009.</li><li>Khoury JG, Saluja R, Keel D, Detwiler S, Goldman MP. Histologic evaluation of interstitial lipolysis comparing a 1064, 1320 and 2100 nm laser in an ex vivo model. Laser Surg Med. 2008; 40:402–406.</li><li>Kim KH, Geronemus RG. Laser lipolysis using a novel 1,064 nm Nd:YAG laser. American Society for Dermatologic Surgery, Inc. Blackwell Publishing, 2006.</li><li>Leibaschoff G et al. “A double-blind, prospective, clinical, surgical, histopathological and ultrasound study comparing the effectiveness and safety of liposuction performed using laser lipolysis (Smartlipo) and Internal Ultrasound (Vaser) method, and assessing the evolution in patients.”</li><li>Mordon S, Eymard-Maurin AF, Wassmer B, Ringot J. Histologic evaluation of laser lipolysis: pulsed 1064-nm Nd:YAG laser versus CW 980-nm diode laser. Aesth Surg J. May/June 2007;27(3):263–268.</li><li>Prado A, Andrades P, Danilla S, Leniz P, Castillo P, Gaete F. A prospective, randomized, doubleblind, controlled clinical trial comparing laser-assisted lipoplasty with suction-assisted lipoplasty. Plast Reconstr Surg. Sep 15 2006;118(4):1032–1045.</li><li>Resko AE, Magro CM, Diktaban T, Sadick NS “Histological Comparison of 1064nm Nd:YAG and 1320nm Nd:YAG Laser Lipolysis Using an ex vivo Model.” Journal of Drugs and Dermatology. Vol.8 Issue 4, April 2009.</li><li>Saluja R. “Dual Wavelength Laser lipolysis treatment of Lipomas: A Case Report.” Journal of Drugs in Dermatology. April 2010 Volume 9 Issue 4 pg.387.</li><li>Woodhall KE, Saluja R, Khoury J, Goldman M. “A comparison of three separate clinical studies evaluating the safety and efficacy of laser assisted lipolysis using 1064nm, 1320nm and a combined 1064/1320nm multiplex device.” Lasers in Surgery and Medicine. 41:774–778. December 2009.</li></ol>"
            }
          ]
        },
        {
          "id": 5,
          "categories_ids": [2,3,5],
          "slug": "elite",
          "title": "Elite+™",
          "desc": "A dual-wavelength system for hair removal, vascular and pigment treatments, and wrinkle reduction.",
          "info": "The Elite+™ Aesthetic Workstation is a dual-wavelength system delivering reliable, cost-effective treatments for hair removal, vascular treatments, epidermal pigment, and wrinkle reduction.",
          "img": "/imgs/p_5.png",
          "img_big": "/imgs/p_5_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Multiple treatments for all skin types</strong><p>Nd:YAG technology with 755nm and 1064nm wavelengths quickly and effectively treats all skin types while delivering the years of reliable performance for which Cynosure is known.</p><strong>Effective Treatment for All Skin Types</strong><p>With Elite+, you have the flexibility to customize treatments to encompass all skin types. Variable spot sizes and pulse durations make Elite+ the natural choice to accommodate a range of specific skincare conditions.</p><ul> <li>Deliver exceptional results across all skin types</li><li>Easily switch between wavelengths for different treatments within a single session</li><li>Air-cooling throughout treatments enhance patient comfort and satisfaction</li><li>Longer pulse durations of up to 300ms precisely match the energy delivered in concert with thermal relaxation time</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Elite-Plus.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Elite-Plus.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Elite-Plus-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Elite-Plus-2.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Elite-Plus-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Elite-Plus-3.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Elite-Plus-6.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Elite-Plus-6.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Hair removal</li><li>Facial and leg veins</li><li>Pigmented lesions</li><li>Skin revitalization</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p>As a recognized industry leader, our Elite+ technology is not only tried and proven, it's backed and strongly supported by clinical research.</p><ol> <li>Alster, T.A., Bryan, H., Williams, C.M. Long-Pulsed Nd:YAG Laser-Assisted Hair Removal in Pigmented Skin. Arch Dermatol 2001;137(7):885-889. doi:10-1001/pubs.Arch Dermatol.-ISSN-0003-987x-137-7-dst00091</li><li>Bencini PL, Luci A, Galimberti M, Ferranti G. Long-term epilation with long-pulsed neodimium:YAG laser. Dermatol Surg 1999;25(3):175-8.</li><li>Bouzari N, Tabatabai H, Abbasi Z, Firooz A, Dowlati Y. Laser hair removal: comparison of long-pulsed Nd:YAG, long-pulsed alexandrite, and long-pulsed diode lasers. Dermatol Surg 2004;30(4 Pt 1):498-502.</li><li>Davoudi S.M., et al. Comparison of long-pulsed alexandrite and Nd:YAG lasers, individually and in combination, for leg hair reduction: an assessor-blinded, randomized trial with 18 months of follow-up. Arch Dermatol 2008;144(10):1323-7. doi: 10.1001/archderm.144.10.1323.</li><li>Chui, C.T., Grekin, R.C., LeBoit, P.E., Zachary, C.B. Long-pulsed Nd:YAG for Hair Removal: Early Histological Changes. LaserNews.net, LLC. 1999.</li><li>Garcia, C., et al. Alexandrite Laser Hair Removal is Safe for Fitzpatrick Skin Types IV-VI. Dermatol Surg. 2000; 26:130-134.</li><li>Groot, D., Rao, J., Johnston, P. and Nakatsui, T. (2003), Algorithm for Using a Long-Pulsed Nd:YAG Laser in the Treatment of Deep Cutaneous Vascular Lesions. Dermatologic Surg 2003; 29:35–42. doi: 10.1046/j.1524-4725.2003.29016.x</li><li>Lanigan, S.W. Incidence of side effects after laser hair removal. J Am Acad Dermatol 2003; 49:882-6.</li><li>Lévy JL, Trelles MA, de Ramecourt A. Epilation with a long-pulse 1064 nm Nd:YAG laser in facial hirsutism. J Cosmet Laser Ther 2001; 3(4):175-9.</li><li>Lloyd, J. R. and Mirkov, M. Long-Term Evaluation of the Long-Pulsed Alexandrite Laser for the Removal of Bikini Hair at Shortened Treatment Intervals. Dermatol Surg 2000; 26:633–637.</li><li>Major, A., Brazzini, B., et al. Nd:YAG 1064 nm laser in the treatment of facial and leg telangiectasias. J Eur Acad Dermatol Venereol 2001; 15(6):559-65.</li><li>Mordon S, Brisot D, Fournier N. Using a “Non Uniform Pulse Sequence” can improve selective coagulation with a Nd:YAG laser (1.06 microm) thanks to Met-hemoglobin absorption: a clinical study on blue leg veins. Lasers Surg Med 2003;32(2):160-70.</li><li>Sadick NS. Laser treatment with a 1064-nm laser for lower extremity class I-III veins employing variable spots and pulse width parameters. Dermatol Surg 2003; 29(9):916-9.</li><li>Sarradet DM, Hussain M, Goldberg DJ. Millisecond 1064-nm neodymium:YAG laser treatment of facial telangiectases. Dermatol Surg 2003; 29(1):56-8.</li><li>Schmults CD, Phelps R, Goldberg DJ. Nonablative facial remodeling: erythema reduction and histologic evidence of new collagen formation using a 300-microsecond 1064-nm Nd:YAG laser. Arch Dermatol 2004; 140(11):1373-6.</li><li>Tanzi EL, Alster TS. Long-pulsed 1064-nm Nd:YAG laser-assisted hair removal in all skin types. Dermatol Surg 2004; 30(1):13-7.</li><li>Taylor MB, Prokopenko I. Split-face comparison of radiofrequency versus long-pulse Nd-YAG treatment of facial laxity. J Cosmet Laser Ther 2006; 8(1):17-22.</li><li>Gold, M.H., Harris, T.R. Nd:YAG LaserFACIAL Treatment. Cynosure Whitepaper 920-0287-000.</li><li>Kilmer, S, et al, Long term laser hair reduction efficacy: A Report on the Use of Long-Pulsed Alexandrite Lasers for Hair Reduction. Cynosure, Inc.</li><li>Kilmer, S. Lloyd, J. Long term Alexandrite laser hair reduction efficacy. Lloyd Dermatology and Laser Center Whitepaper.</li><li>Kulkin, J. Aesthetic procedures in a GYN practice. Cynosure Whitepaper 920-0388-000.</li></ol>"
            }
          ]
        },
        {
          "id": 6,
          "categories_ids": [2,3],
          "slug": "icon",
          "title": "Icon™",
          "desc": "One multi-purpose platform that provides a comprehensive range of popular treatments.",
          "info": "Cynosure's industry-leading aesthetic platform provides a comprehensive suite of popular treatments for your patients, from hair removal to procedures for pigmentation, vessels, wrinkles, scars, and stretch marks.",
          "img": "/imgs/p_6.png",
          "img_big": "/imgs/p_6_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Icon: a suite of treatments all in one place</strong><p>The Icon system offers industry-leading IPL and laser therapies, as well as Skintel(TM), the industry’s only live melanin reader. Icon's 7 handpieces let you tailor your aesthetic practice.</p><img src='/imgs/graph.jpg' class='graph'>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-2.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-3.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-4.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-4.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-5.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-5.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-6.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-6.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-7.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-7.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-8.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-8.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Icon-9.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Icon-9.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Vascular & pigmented lesions</li><li>Surgical & acne scars</li><li>Stretch marks</li><li>Wrinkles</li><li>Hair removal</li><li>Leg veins</li></ul>"
            },
            {
              "id": 4,
              "title": "Accessories",
              "html": "<div class='accessori'><strong>Skintel Melanin Reader</strong><div><img src='https://www.cynosure.com/wp-content/uploads/2018/09/Skintel-Melanin-Reader.jpg' alt=''><p>Using Cynosure’s proprietary technology, Skintel allows for accurate assessment of skin type and treatment parameters.</p></div></div>"
            },
            {
              "id": 5,
              "title": "Clinical Data",
              "html": "<p>The Icon system redefines the standard of light-based cosmetic and dermatologic care.</p><small>Vascular Lesions &amp; Skin Renewal</small><ol><li>Shek S, P.Y. Chan N, C.Y. Chan J, H.L. Chan H. 2012. The Efficacy of a Dual Filter Handpiece (500–670nm and 870–1200 nm) of an Intense Pulse Light Device for the Treatment of Facial Telangiectasia. American Society for Laser Medicine and Surgery. (Abstract)</li><li>Adatto M, Friedman D. 2012. Clearance of Port Wine Stains Following Optimized Pulsed Light Treatments. American Society for Laser Medicine and Surgery. (Abstract)</li><li>Tanghetti E MD. 2012. Split-face Randomized Treatment of Facial Telangiectasia Comparing Pulsed Dye Laser and an Intense Pulsed Light Handpiece. Lasers in Surgery and Medicine. (Abstract)</li><li>Weiss R, Ross V, Tanghetti E, Vasily D, Childs J, Smirnov M, Altshuler G. 2011. Characterization of an Optimized Light Source and Comparison to Pulsed Dye Laser for Superficial and Deep Vessel Clearance. Lasers in Surgery and Medicine.</li><li>(Abstract)</li><li>Ross V, Tanghetti E, Vasily D, Weiss R, Childs J, Erofeev A, Smirnov M, Altshuler, G. 2010. New Optimized Light Source for Treatment of Vascular Lesions of the Skin. PMTI.</li><li>Childs J., Erofeev A., Smirnov M., Altshuler G. 2010. Optimum Spectrum and Pulse Shape for Vascular Lesion Treatment: The Science Behind MaxG. PMTI.</li><li>McMeekin T, Lertzman B, Hahn H, Arcara K. 2008. Randomized Study of Intense Pulsed Light and Pulsed Dye Laser in The Treatment of Facial Telangiectasia. Lasers in Surgery and Medicine. (Abstract)</li><li>Miranda C., Narurkar V. 2006. Comparison of StarLux LuxG with Long Pulsed PDL, Long Pulsed KTP, and Traditional IPL for Treatment of Telangiectasias. Lasers in Surgery and Medicine. 70. (Abstract)</li><li>Kim K., Berenstein L., Chapas A., Geronemus R. 2006. Comparison Treatments for Vascular Lesions with the Vbeam® and the StarLux IPL. Lasers in Surgery and Medicine. 242. (Abstract)</li><li>Astner S, Wolmers S, Tsao S. 2005. Increased Efficacy in Treatment of Facial Telangiectasia and Rosacea Utilizing StarLux IPL Technology with Variable Pulsewidth and Fluence. Lasers in Surgery and Medicine.105. (Abstract)</li><li>Ross E.V. 2005. Split Treatment of Photodamaged Skin with KTP 532nm Laser with 10mm Handpiece Versus IPL: A Cheek-to-Cheek Comparison. Lasers in Surgery and Medicine. Vol. 9999:1–5.</li><li>Klingman D.E, Zhen Y. 2004. Intense Pulsed Light Treatment of Photoaged Facial Skin. American Society for Dermatologic Surgery, Inc. Vol. 30: 1085–1090.</li></ol><small>Case Studies: Pigmented Lesions, Vascular Lesions and Photofacial</small><ol><li>&nbsp;IPL G Series Case Study for Treatment of Postoperative Bruising, 2/5/2013</li><li>MaxG Case Study Post Injectable Bruising from Dermal Fillers, 2/5/2013</li><li>MaxG Case Study: Facial Telangiectasia, David Vasily MD, 9/23/2011</li><li>MaxG Case Study—Port Wine Stains, Maurice Adatto, MD, 8/12/2011</li><li>StarLux Case Study: Treatment of Vascular Lesions—Max G vs. Vbeam Pulsed Dye Laser, Arndt, Kenneth, 9/22/2010</li><li>StarLux Case Study: Facial Telangiectasias, Alibhai, Haneef, 3/16/2010</li><li>StarLux Case Study: Facial Telangiectasia (1), Tanghetti, Emil, 6/10/2010</li><li>StarLux Case Study: Facial Telangiectasia (2), Tanghetti, Emil, 6/10/2010</li><li>StarLux Case Study: Actinic Bronzing, VanDam, David, 4/21/2009</li><li>StarLux Case Study: Solar Lentigines and Actinic Bronzing, Alibhai, Haneef, 4/21/2009</li></ol><small>Fractional Non-Ablative Skin Resurfacing</small><ol><li>Jeffrey Dover J, Saedi N, Mickle C, Chan S. 2012. A New Combined Treatment for Facial Rejuvenation Using an Optimized Pulsed Light Source Followed by a Fractional Laser. American Society for Laser Medicine and Surgery. (Abstract)</li><li>Dierickx C, Campos V, Pinto C. 2012. Deep Heating of Dermis and Non-Ablative Fractional Facial Treatment with Micro-Compression Optics. American Society for Laser Medicine and Surgery. (Abstract)</li><li>Doherty S MD, Seckel B MD, Childs J PhD, Tabatadze D PhD, Erofeev A PhD, Smirnov M Ph.D., Altshuler G Ph.D., Sc.D. 2011. XF™ Microlen Optic and XD™ Microlen Compression Optic for Non-Ablative Fractional Skin Treatment with the Palomar Icon™ System. PMTI.</li><li>Zelickson B, Walgrave S., Al-Arashi M, Yaroslavsky I., Altshuler G, Childs J, Smirnow M, Tabatadze D. 2011. Evaluation of a Fractional Laser with Optical Compression Pins. Lasers in Surgery and Medicine. (Abstract)</li><li>Childs J, Altshuler G.&nbsp; 2011. XD™ Microlens Compression Optic for Deep-Dermis Non-Ablative Fractional Treatment. PMTI.</li><li>Hedelund, L, Winther K, Beyer D, Nymann P, Haedersdal M. 2009. Fractional Non-Ablative 1540 nm Laser Resurfacing for Atrophic Acne Scars: A Randomized Controlled Trial. Lasers in Surgery and Medicine. (Abstract)</li><li>Vasily D. 2007. Treatment of Melasma with the StarLux 1540. Lasers in Surgery and Medicine. (Abstract)</li><li>Altshuler G, Yaroslavsky I, Smirnov M, Erofeev A, Childs J, Tabatadze D, Belikov A, Pushkareva A, Tihonov S. 2003. Self Canalization of Laser Microbeam in Tissue as Fundamental Mechanism of Fractional Skin Resurfacing. Lasers in Surgery and Medicine. (Abstract)</li></ol><small>Case Studies: Non-Ablative Skin Resurfacing</small><ol><li>Palomar Emerge Case Study: Acne Scarring For International Use Only, 6/11/2013</li><li>StarLux Case Study – Non-Ablative Scar Treatment, van Vuuren, Rudie, 10/4/2011</li><li>1540 Case Study: Acne Scars, Zanelli, Gaetano, 8/12/2011</li><li>StarLux Case Study: Non-ablative Skin Resufacing, Sinclair, Michael, 12/4/2010</li><li>StarLux Case Study: Stretch Marks, Kolesnikova, Larissa, 9/22/2010</li><li>StarLux Case Study: Facial Surgical Scars, Martin, John, 9/15/2010</li><li>StarLux Case Study: Scar Treatment For International Use Only, Kolesnikova, Larissa, 7/21/2010</li><li>StarLux Case Study: Acne Scars for Skin Type VI, Makrides, Lisa, 6/9/2010</li><li>StarLux Case Study: Non-Ablative Skin Resurfacing with Lux1440, Vasily, David, 3/16/2010</li><li>StarLux Case Study: Surgical Scar Foot, Vasily, David, 2/4/2010</li><li>StarLux Case Study: Scar Nose Bridge, Vasily, David, 12/11/2009</li><li>StarLux Case Study: Scar Arm, Vasily, David, 12/11/2009</li><li>StarLux Case Study: Acne Scars, Vasily, David, 12/11/2009</li><li>StarLux Case Study: Scar Right Cheek, Vasily, David, 12/11/2009</li><li>StarLux Case Study: Surgical Scar Right Eye, Vasily, David, 12/11/2009</li></ol><small>Fractional Ablative Skin Resurfacing</small><ol><li>Waibel J, Graber E, Davis S, Badiavas E. 2012. Effects of Erbium Fractional Resurfacing on Third Degree Hypertrophic Burn Scars. American Society for Laser Medicine and Surgery. (Abstract)</li><li>Ross, E.V., Doherty S, Seckel B. 2009. Groove Patterns of Ablation for Fractional Skin Resurfacing: Healing Time Course Study and Histological Evaluation. PMTI.</li><li>Doherty S, Seckel B, Dierickx C, Ross E.V. 2009. Groove Patterns of Ablation for Fractional Skin Resurfacing: Clinical Results and Applications. PMTI.</li><li>Doherty S, Seckel B, Ross E.V. 2009. Advantages of a Groove Pattern of Micro-Fractional Ablation for Facial Skin Resurfacing.Lasers in Surgery and Medicine. (Abstract)</li><li>Ross E.V., Khatri K. 2008. Novel, Micro-Fractional Ablative Erbium Laser for Wrimkle Reduction and Skin Resurfacing. PMTI.</li><li>Dierickx C, Khatri K, Altshuler G, Childs J, Erofeev A, Smirnov M, Tabatadze D, Yaroslavsky I. 2007. Fractional Delivery of Er:Yag Laser Light to Improve Efficacy and Safety of Ablative Resurfacing Procedure. Lasers in Surgery and Medicine. (Abstract)</li></ol><small>Case Studies: Ablative Skin Resurfacing Including Wrinkles</small><ol><li>StarLux Case Study: Ablative Resurfacing with Lux2940 for Mature Wrinkled Facial Skin, Makrides, Lisa, 3/16/2010</li><li>StarLux Case Study: Perioral Rhytids, VanDam, David, 12/11/2009</li><li>StarLux Case Study: Case Study for Perioral Rhytides using the Lux2940 and Groove Optic, Doherty, Sean&nbsp; 9/1/2009</li></ol><small>Combination Fractional Ablative and Fractional Non-Ablative Skin Resurfacing</small><ol><li>Haneef Alibhai M.D. 2013. 2940nm Er:YAG + 1540nm Er:Glass Combination Treatment for Facial Resurfacing, PMTI</li><li>Bass L, Doherty S, Seckel B, Ross V. 2011. Combination Fractional Non-Ablative and Ablative Treatment for Facial Skin Resurfacing: Clinical Results and Applications. PMTI.</li><li>Joel L. Cohen, MD; E. Victor Ross, MD 2011. About Skin Dermatology and DermSurgery, Englewood, CO; Scripps Clinic, Carmel Valley, San Diego, CA</li></ol><small>Case Studies: Combination Ablative and Non-Ablative Treatments</small><ol><li>StarLux Case Study: Treatment of Moderate to Severe Wrinkles with Non-Ablative and Ablative Fractional Handpieces in a Single Combined Procedure, Doherty, Sean, 2/16/2011</li><li>StarLux Case Study: Facial Treatment with Lux2940 Groove and Lux1440 Handpieces, Doherty, Sean, 12/14/2009</li></ol><small>Laser Hair Removal</small><ol><li>&nbsp;Joe Lowery, Rich Cohen, Felicia Whitney, James Childs and Gregory Altshuler, 2013. Comparative Study between the Vectus™ Diode Laser System and LightSheer™ Duet for Long-Term Hair Reduction in the Axilla. PMTI.</li><li>James Childs, PhD, Richard Cohen, PhD, Mikhail Smirnov, PhD, Henry Zenzie, MS Gregory B. Altshuler, PhD 2012. Optimization of a Laser Diode for Permanent Hair Reduction. PMTI.</li><li>Amin S, Goldberg D.&nbsp; 2006. Clinical Comparision of Four Hair Removal Lasers and Light Sources. Journal of Cosmetic and Laser Therapy. 8: 65–68.</li><li>Manstein D, Pourshagh M, Anderson R, Erofeev A, Yaroslavsky I, Altshuler G. 2001. Effects of Fluence and Pulse Duration for Flashlamp Exposure on Hair Follicles. Lasers in Surgery and Medicine.</li><li>Manstein D, Pourshagh M, Erofeev A, Altshuler G, Anderson R. 2004. Effects of Diode Laser Versus Flashlamp Exposure on Hair Follicles. Lasers in Surgery and Medicine. (Abstract)</li><li>Dierickx C, Altshuler G. 2006. Efficacy and Safety of a Suction-Enhanced Filtered IPL System for Hair Management. Lasers in Surgery and Medicine. (Abstract)</li><li>Campos V, Dierickx C, Farinelli W, Lin T, Manuskiatti W, Anderson R. 2000. Ruby Laser Hair Removal: Evaluation of Long-Term Efficacy and Side Effects. Lasers in Surgery and Medicine. 26:177–185.</li><li>Schulze R, Ross E.V. 2007. Low Fluence 1064nm Laser Hair Reduction for Pseudofolliculitis Barbae in Skin Types IV, V, and VI. Lasers in Surgery and Medicine. (Abstract)</li></ol><small>Scar and Striae Treatment</small><ol><li>E. Verhaeghe,†, K. Ongenae, L. Dierckxsens, J. Bostoen, J. Lambert. Nonablative fractional laser resurfacing for the treatment of scars and grafts after Mohs micrographic surgery: a randomized controlled trial. 2012. Journal of the European Academy of Dermatology and Venereology. (Abstract)</li><li>Martin Jr J. 2012. The 1540-nm Nonablative Fractional Photothermolysis for Facial Surgical Scars. American Journal of Cosmetic Surgery. Vol. 29, No. 1, pp. 25–29.</li><li>de Angelis, F, Kolesnikova L, Renato F, Liguori G. 2010. Fractional Non-Ablative 1540-nm Laser Treatment of Striae Distensae in Fitzpatrick Skin Types II to IV – Clinical and Histological Results. Aesthetic Surgery Journal. (Abstract)</li><li>de Angelis F, Kolesnikova L. 2009. Fractional, Non-Ablative Laser Therapy for the Treatment of Striae Distensae. PMTI.</li><li>Weiss R, Weiss M, Beasley K. 2008. Experience with Fixed Array Novel 1540 Fractional Erbium Laser for Acne Scars. Lasers in Surgery and Medicine. (Abstract)</li></ol><small>Warts</small><ol><li>Gonzales J. 2004. The Treatment of Warts with Intense Pulsed Light Technology. PMTI.</li></ol><small>Case Studies: Soft Tissue Coagulation</small><ol><li>StarLux Case Sudy: Facial and Neck Soft Tissue Coagulation, Doherty, Sean, 5/5/2010</li><li>StarLux Case Study: Abdominal Soft Tissue Coagulation, Doherty, Sean, 6/10/2010</li><li>StarLux Case Study: DeepIR Soft Tissue Coagulation of Umbilical Area, Makrides, Lisa, 12/11/2009</li></ol>"
            }
          ]
        },
        {
          "id": 7,
          "categories_ids": [2],
          "slug": "vectus",
          "title": "Vectus® Laser",
          "desc": "A dedicated, reliable, and powerful solution for high-volume hair removal that every practice needs.",
          "info": "Hair removal is consistently one of the most in-demand aesthetic treatments. Cynosure's Vectus laser delivers a reliable and powerful platform, enabling you to treat patients quickly and effectively.",
          "img": "/imgs/p_7.png",
          "img_big": "/imgs/p_7_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Larger spot sizes. Faster treatments.</strong><p>Cynosure’s Vectus technology offers a larger spot sizes to treat bigger surface areas such as the back or full leg, in less time. What does that mean? More return on your investment.</p><ul> <li>Uniform laser beam reduces hot spots for optimal treatment</li><li>Advanced Contact Cooling™ throughout treatment enhances patient comfort</li><li>Photon Recycling™ increases fluence 1.5-2x and helps maximize treatment results</li><li>Skintel® Melanin Reader™ provides safe and effective treatment settings</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Vectus.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Vectus.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Hair Removal for all skin types</li></ul>"
            },
            {
              "id": 4,
              "title": "Accessories",
              "html": "<div class='accessori'><strong>Skintel Melanin Reader</strong><div><img src='https://www.cynosure.com/wp-content/uploads/2018/09/Skintel-Melanin-Reader.jpg' alt=''><p>Using Cynosure’s proprietary technology, Skintel allows for accurate assessment of skin type and treatment parameters.</p></div></div>"
            },
            {
              "id": 5,
              "title": "Clinical Data",
              "html": "<p>As a recognized industry leader, our technology — including Vectus technology — is strongly supported by clinical research.</p><ol><li>Joe Lowery, Rich Cohen, Felicia Whitney, James Childs and Gregory Altshuler. Comparative Study between the Vectus™ Diode Laser System and LightSheer™ Duet for Long-Term Hair Reduction in the Axilla. 2013. PMTI.</li><li>James Childs, PhD, Richard Cohen, PhD, Mikhail Smirnov, PhD, Henry Zenzie, MS Gregory B. Altshuler, PhD. Optimization of a Laser Diode for Permanent Hair Reduction. 2012. PMTI.</li><li>Amin S, Goldberg D.&nbsp; 2006. Clinical Comparison of Four Hair Removal Lasers and Light Sources. Journal of Cosmetic and Laser Therapy. 8: 65–68.</li><li>Manstein D, Pourshagh M, Anderson R, Erofeev A, Yaroslavsky I, Altshuler G. 2001. Effects of Fluence and Pulse Duration for Flashlamp Exposure on Hair Follicles. Lasers in Surgery and Medicine.</li><li>Manstein D, Pourshagh M, Erofeev A, Altshuler G, Anderson R. 2004. Effects of Diode Laser Versus Flashlamp Exposure on Hair Follicles. Lasers in Surgery and Medicine. (Abstract)</li><li>Dierickx C, Altshuler G. 2006. Efficacy and Safety of a Suction-Enhanced Filtered IPL System for Hair Management. Lasers in Surgery and Medicine. (Abstract)</li><li>Campos V, Dierickx C, Farinelli W, Lin T, Manuskiatti W, Anderson R. 2000. Ruby Laser Hair Removal: Evaluation of Long-Term Efficacy and Side Effects. Lasers in Surgery and Medicine. 26:177–185.</li><li>Schulze R, Ross E.V. 2007. Low Fluence 1064nm Laser Hair Reduction for Pseudofolliculitis Barbae in Skin Types IV, V, and VI. Lasers in Surgery and Medicine. (Abstract)</li></ol>"
            }
          ]
        },
        {
          "id": 8,
          "categories_ids": [3],
          "slug": "pelleve",
          "title": "Pellevé® RF Wrinkle Reduction System",
          "desc": "An innovative wrinkle treatment using RF for skin tightening via soft tissue coagulation.",
          "info": "Renew skin’s natural beauty with safe, effective RF treatments that create visible improvement in facial wrinkles.",
          "img": "/imgs/p_8.png",
          "img_big": "/imgs/p_8_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>The power of Pelleve with PelleFirm RF body treatment</strong><p>Powered by our state of the art Pellevé S5 RF Generator, PelleFirm provides a non-invasive, well-tolerated body treatment which temporarily and effectively reduces the appearance of cellulite, resulting in a smoother, healthier looking appearance.</p>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Pelleve.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Pelleve.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Pelleve-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Pelleve-2.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Wrinkles</li><li>Fine lines</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<small> <strong>Wrinkle Reduction Treatments </strong>Shelton RM <br>Prime Journal, January/February 2014</small><small> <strong>New Energy-Based Systems Fill Void in Aesthetics Market </strong>Jeffrey Frentzen <br>THE Aesthetics Guide, November/December 2013</small><small> <strong>Novel Nonablative Radio-Frequency Rejuvenation Device Applied to the Neck and Jowls: Clinical Evaluation and 3-Dimensional Image Analysis </strong>Chipps L, Bentow J, Prather HB, So JJ, Schouest J, Ozog DM, Moy RL <br>Journal of Drugs in Dermatology, November 2013</small><small> <strong>Novel Nonablative Radio-Frequency Rejuvenation Device Applied to the Neck and Jowls: Clinical Evaluation and 3-Dimensional Image Analysis </strong>Chipps L, Bentow J, Prather HB, So JJ, Schouest J, Ozog DM, Moy RL <br>Journal of Drugs in Dermatology, November 2013</small><small> <strong>Advances in Aesthetics Vulvovaginal Surgery </strong>Alinsod RM <br>Prime Journal, October 2013</small><small> <strong>Eye Makeover by Pellevé </strong>Lewis W <br>Prime Journal, September 2013</small><small> <strong>A Tight Fit: Can Non-Invasive Tissue Tightening Devices Fill a Niche in your Practice?Eye Makeover by Pellevé </strong>Prime Journal, September 2013</small><small>Pellevé Gets High Marks for Patient Satisfaction <br>Lee SJ <br>Prime Journal, July/August 2013</small><small> <strong>A Tight Fit: Can Non-Invasive Tissue Tightening Devices Fill a Niche in your Practice? </strong>Taub AF <br>Modern Aesthetics, July/August 2013</small><small> <strong>The Versatility of Pellevé for Aesthetics </strong>Schlessinger J <br>Prime Journal, May/June 2013</small><small> <strong>Investment Strategies </strong>Bucay VW <br>Dermatology Times, March 2013</small><small> <strong>Prospective Multicenter Study for Safety &amp; Efficacy Unique RF Device for Hand Wrinkles </strong>Vega JM, Bucay VW, Mayoral <br>Journal of Drugs in Dermatology, January 2013</small><small><strong>Facial Tightening with an Advanced 4-MHz Monopolar Radiofrequency Device </strong>Taub AF, Tucker RD, Palange A <br>Journal of Drugs in Dermatology, November 2012</small><small><strong>Use of an Imaging Device after Nonablative Radiofrequency (Pellevé) Treatment for Periorbital Rhytids </strong>Javate RM, Cruz RT <br>American Society of Ophthalmic Plastic and Reconstructive Surgery Annual Fall Scientific Symposium Presentation, October 2011</small><small><strong>Ocular Surface Temperature Changes Associated with Pellevé Radiofrequency Treatment </strong>Goldstein SM <br>American Society of Ophthalmic Plastic and Reconstructive Surgery Annual Fall Scientific Symposium Presentation, October 2011</small><small><strong>New RF System for Dermal Tightening: Review of Technique and Results from 1000 Patients </strong>Jeremic I <br>European Academy of Dermatology and Venereology Presentation, October 2011</small><small><strong>A Novel Application of Radiofrequency Using a Continuous Thermal Treatment Device for Skin Tightening of the Face and Neck Assessed with 3D Photography </strong>Chipps L, Prather HB, So JJ, Schouest J, Bentow J, Moy RL <br>European Academy of Dermatology and Venereology Meeting Presentation, October 2011</small><small><strong>A New Radio Frequency Electrosurgery Generator </strong>Tucker RD <br>European Academy of Dermatology and Venereology Presentation, October 2011</small><small><strong>New RF-Based Handpiece Shows Promise </strong>Waddell S, Frentzen J <br>Plastic Surgery Practice, October 2011</small><small><strong>Novel Nonablative Radiofrequency Rejuvenation Device: Clinical Evaluation and Patient Satisfaction </strong>Chipps L <br>American Academy of Facial Plastic and Reconstructive Surgery Meeting Presentation, September 2011</small><small><strong>Multi-Probe Technique with a New RF System: A Retrospective Study of 1200 Skin Tightening Patients </strong>Jeremic I <br>American Academy of Facial Plastic and Reconstructive Surgery Meeting Presentation, September 2011</small><small><strong>The Pelleve Procedure: An Effective Method for Facial Wrinkle Reduction and Skin Tightening </strong>Stampar M <br>Facial Plastic Surgery Clinics of North America, May 2011</small><small><strong>Histopathological Analysis of Tissue Before and After Pellevé Treatment </strong>Javate RM <br>Clinical Summary White Paper, April 2011</small><small><strong>Next Generation of Pellevé Wrinkle Reduction Technology </strong>Lewis W <br>Practice Surgery Practice Supplement, April 2011</small><small><strong>Non-Ablative Treatment for Periorbital Rhytides and Midface Laxity </strong>Javate RM <br>Clinical Summary White Paper, April 2011</small><small><strong>Nonablative 4-MHz Dual Radiofrequency Wand Rejuvenation Treatment for Periorbital Rhytides and Midface Laxity </strong>Javate RM, Cruz RT, Khan J, Trakos N, Gordon RE <br>Ophthalmic Plastic and Reconstructive Surgery, January 2011</small><small><strong>Nonsurgical Tightening of Skin Laxity: A New Radiofrequency Approach </strong>Rusciani A, Curinga G, Menichini G, Alfano C, Rusciani L <br>Journal of Drugs in Dermatology, April 2007</small>"
            }
          ]
        },
        {
          "id": 9,
          "categories_ids": [3,4,5],
          "slug": "picosure",
          "title": "PicoSure®",
          "desc": "World's first picosecond aesthetic laser for skin revitalization and pigmentary treatments.",
          "info": "The world's first picosecond aesthetic laser-optimal wavelengths for treating pigmentary conditions and overall skin revitalization, with the added capability of tattoo removal.",
          "img": "/imgs/p_9.png",
          "img_big": "/imgs/p_9_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Groundbreaking innovation. Unique technology.</strong><p>Creating an intense photothermal impact in trillionths of a second, PicoSure’s advanced technology spares the skin high thermal damage and targets the chromophore for better clearance in fewer treatments.</p><ul> <li>Optimally targets melanin to treat a range of pigmentary conditions</li><li>Incurs minimal thermal damage due to picosecond pulse duration</li><li>Customizable treatments with 2-6mm, 8mm, and 10mm spot sizes</li><li>Proven clinical validation, with 26 publications and 59 abstracts to date</li></ul><p>PicoSure makes tattoo removal even easier. The 755nm wavelength is able to target black, blue, and green tattoo inks, while the optional 532nm wavelength offers effective treatment of “sunset colors” – red, yellow and orange – which are typically hard to correct. You’ll also be able to:</p><ul> <li>Tailor treatments using variable spot sizes</li><li>Use boost mode to better treat recalcitrant tattoos with shortened pulse width</li><li>Treat black ink in darker skin type patients using the 1064nm delivery</li></ul><strong>Focus Lens Array: A revolution in skin revitalization</strong><p>Cynosure’s Focus Lens Array creates microscopic, photomechanical reactions in the epidermis that communicate with the dermis, leading to increased collagen and elastin in the skin. This breakthrough enables skin revitalization with virtually no downtime—only with our PicoSure laser.</p>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure-2.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure-3.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure-4.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure-4.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure-5.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure-5.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Picosure-6.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Picosure-6.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>All-color tattoo removal</li><li>Overall skin revitalization</li><li>Pigmented lesions, wrinkles & acne scars</li></ul>"
            },
            {
              "id": 4,
              "title": "Accessories",
              "html": "<div class='accessori'><strong>PicoSure FOCUS Lens Array</strong><div><img src='https://www.cynosure.com/wp-content/uploads/2018/09/PicoSure-FOCUS-lens-array.jpg' alt=''><p>FOCUS™ Lens Array for PicoSure expands picosecond technology beyond tattoo removal for skin treatments unlike any other.</p></div></div>"
            },
            {
              "id": 5,
              "title": "Clinical Data",
              "html": "<p>PicoSure is the first and only aesthetic picosecond laser for the safe and effective removal of tattoos and benign pigmented lesions, as well as acne scars, wrinkles and skin revitalization treatments. Clinical data shows better clearance in fewer treatments.</p><ol> <li>Successful and Rapid Treatment of Blue and Green Tattoo Pigment with a Novel Picosecond Laser Brauer JA, Reddy KK, Anolik R, et al. Arch Dermatol. 2012;148(7):820-823.</li><li>Treatment of Tattoos with a Picosecond Alexandrite Laser: A Prospective Trial Saedi N, Metelitsa A, Petrell K, et al. Arch Dermatol. 2012;148(12):1360-1363.</li><li>Use of a Picosecond Pulse Duration Laser with Specialized Optic for Treatment of Facial Acne Scarring Brauer JA, Kazlouskaya V, Alabdulrazzaq H, et al. JAMA Dermatol. Published online November 19, 2014.</li><li>Picosecond Lasers: The Next Generation of Short-pulsed Lasers Freedman J., Kaufman J., Metelitsa A., Seminars in Cutaneous Medicine and Surgery. Vol. 33, December 2014.</li><li>Treatment of Nevus of Ota with a Picosecond 755-nm Alexandrite Laser Chesnut C., Diehl J., Lask G. Dermatol Surg. 2015;41:508–536.</li><li>Clearance of Yellow Tattoo Ink With a Novel 532-nm Picosecond Laser Alabdulrazzaq H., Brauer J., Bae YS., Geronemus R. Lasers in Surgery and Medicine. 2015; Lasers in Surgery and Medicine 47:285–288.</li></ol>"
            }
          ]
        },
        {
          "id": 10,
          "categories_ids": [3],
          "slug": "smartskin",
          "title": "Smartskin®+",
          "desc": "A full-featured CO2 workstation providing highly-customizable, cost-effective skin resurfacing options.",
          "info": "Cynosure's breakthrough micro-ablative skin resurfacing workstation provides the skin revitalization and resurfacing technology you need to maximize your practice.",
          "img": "/imgs/p_10.png",
          "img_big": "/imgs/p_10_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Improve skin and reduce wrinkles, all with one workstation</strong><p>The highly-customizable and cost-effective CO2 workstation provides:</p><ul> <li>Intelligent multi-pulse technology.</li><li>Adaptable penetration up to 2 mm for treating deep wrinkles or scars </li><li>Three scanner settings for the ultimate safe treatment parameters</li><li>Five different scan shapes</li><li>38 different density settings for micro-ablation</li><li>Surgical hand piece for ablation, coagulation and operating</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Smartskin.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Smartskin.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Smartskin-3.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Smartskin-3.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Skin resurfacing</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p>As a recognized industry leader, Cynosure supports its technology with clinical research.</p><ol><li>Chapas, A.M., Brightman, L., Sukal, S., Hale, E., Daniel, D., Bernstein, L.J., Geronemus, R.G. Successful Treatment of Acneiform Scarring With CO2 Ablative Fractional Resurfacing. Lasers Surg Med. 2008; 40:381–386.</li><li>Ancona, D., Katz, B.E. A prospective study of the improvement in periorbital wrinkles and eyebrow elevation with a novel fraction CO2 laser – the fraction eyelift. J Drug Dermatol. 2010; 9(1)16-21.</li><li>Gold, M.H., Heath, A.D., Biron, J.A. Clinical evaluation of the SmartSkin fraction laser for the treatment of photodamage and acne scars. J Drug Dermatol. 2009; 8(11).</li><li>Alexiades-Armenakes, M., Sarnoff, D., Gotkin, R., Sadick, N. Multicenter clinical study and review of fractional ablative CO2 laser resurfacing for the treatment of rhytides, photoaging, scars, and striae. J Drug Dermatol. 2011; 10(4)352-362.</li><li>Alexiades-Armenakes, M., Dover, J.S., Arnde, K.A. The spectrum of laser skin resurfacing: nonablative, fractional, and ablative laser resurfacing. J Am Acad Dermatol. 2008; 58:719-737.</li><li>Goldberg, D.J., Weiss, R., Ataii, A., Zachary, C., Burns, J., Cassuto, D. Micro-Ablative Fractional Resurfacing: An Overview of Fractional CO2. In: Mai Pham, Ed. Laser &amp; light Technology. 2007.</li><li>Sarnoff, D.S., Petti, C. SmartSkin CO2 Laser Skin Renewal Workstation Allows Customized Tx. In: Bob Kronemyer, Assoc. Ed. The Aesthetic Guide. Sept/Oct 2009.</li><li>Katz, B. Cynosure’s Affirm CO2 Modernizes CO2 Treatments. In: Bob Kronemyer, Assoc. Ed. The Aesthetic Guide. Sept/Oct 2008.</li><li>Sarnoff, D. SmartSkin: Laser Depth of Penetration. Case Study. Cynosure, Inc. 2011.</li></ol>"
            }
          ]
        },
        {
          "id": 11,
          "categories_ids": [3],
          "slug": "tempsure",
          "title": "Tempsure™ Envi",
          "desc": "Our 300W monopolar radiofrequency platform to reduce wrinkles, treat cellulite, and tighten skin via soft tissue coagulation.",
          "info": "Introducing our newest 300W monopolar radiofrequency platform with innovative handpieces to reduce wrinkles, treat cellulite, and tighten skin.*",
          "img": "/imgs/p_11.png",
          "img_big": "/imgs/p_11_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Powered by beautifully Intelligent™ RF technology</strong><p>TempSure Envi takes the guesswork out of RF. Therapeutic Logic Control(tm) (TLC) activates a timer when tissue has reached therapeutic temperature, allowing for effective, repeatable results. Treatments are safe for all skin types, and 99% of patients described TempSure as comfortable or relaxing.</p><ul> <li>Therapeutic Logic Control (TLC) guarantees consistent treatments time after time.</li><li>Best-in-class temperature sensing with up to 100x faster response time than the competition</li><li>Safe, consistent and reliable RF skin tightening* treatments in any practitioner’s hands</li><li>Powerful 300W generator with 4MHz RF delivery supports future applications.</li><li>Five handpieces sizes ranging from 10mm to 30mm for customizable treatments</li><li>Soothing spa tones delivered during treatment for enhanced patient satisfaction</li></ul>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-TempSure.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-TempSure.jpeg"    
                },
                {
                  "before": "/imgs/before_1.jpg",
                  "after": "/imgs/after_1.jpg"    
                },
                {
                  "before": "/imgs/before_2.jpg",
                  "after": "/imgs/before_2.jpg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Wrinkles</li><li>Frown lines</li><li>Crow's feet</li><li>Smile lines</li></ul>"
            }
          ]
        },
        {
          "id": 12,
          "categories_ids": [4],
          "slug": "medlite",
          "title": "MedLite® C6",
          "desc": "Q-Switched Nd:YAG laser for revitalization and treatment of pigmented lesions and tattoos for all skin types.",
          "info": "This Q-swicthed Nd:YAG technology provides safe, effective treatments for tattoo removal, skin revitalization, and pigmented lesions.",
          "img": "/imgs/p_12.png",
          "img_big": "/imgs/p_12_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>MedLite C6: Trusted by practitioners worldwide for its consistent results.</strong><p>The Medlite C6 provides a flat-top beam profile, producing consistent results with few complications and reliable treatments time after time. This homogeneous beam delivery energy spreads evenly over the skin’s surface, minimizing epidermal injury and increasing patient satisfaction. Medlite C6 removes tattoos, treats pigmentary conditions, and reduces acne scarring and wrinkles.</p><ul> <li>Pigmented lesions</li><li>Acne scars</li><li>Wrinkles</li></ul><strong>Expanded capabilities. Expanded offerings.</strong><p>Extend the wavelength capabilities of the device with the addition of 585nm and 650nm MultiLite™ dye handpieces for the treatment of multi-colored tattoos. The 532Lite™ handpiece is also optimal for treating small pigmented lesions that require low fluences.</p>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Medlite.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Medlite.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Medlite-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Medlite-2.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Pigmented lesions</li><li>Acne scars</li><li>Wrinkles</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p>MedLite C6 is supported by extensive clinical data.</p><ol> <li>Gold, M., MD. (2009). Tattoo removal with an electro-optic Q-switched Nd:YAG laser with a unique pulse dispersion. (April 2009). Cosmetic Dermatology, 22 (4). </li><li>Karsai, S., MD, Pfirrmann, G., MD, Hammes, S., MD, Raulin, C., MD. (2008). Treatment of resistant tattoos using a new generation Q-switched Nd:YAG laser: Influence of beam profile and spot size on clearance success. Lasers in Surgery and Medicine, 40, 139-145. </li></ol><small><strong>Pigmentation | Melasma</strong></small><ol start='3'> <li> Polnikorn, N., MD. (2010). Treatment of refractory melasma with the MedLite C6 Q-switched Nd:YAG laser and alpha arbutin: A prospective study. Journal of Cosmetic and Laser Therapy. 12, 126-131. </li><li>Polnikorn, N., MD. (2008). Treatment of refractory dermal melasma with the MedLite C6 Q-switched Nd:YAG laser: Two case reports. Journal of Cosmetic and Laser Therapy. 10, 167-173. </li></ol><small><strong>Pigmentation | Hori’s Nevus</strong></small><ol start='5'> <li> Hock Leong EE, MBBS, MRCP(UK), Chee Leok Goh, MBBS, FRCP(UK), Khoo, ES-Y. Chan, PhD, Por Ang, MBBS, MRCP(UK). (2006). Treatment of acquired bilateral nevus of ota-like macules (Hori’s Nevus) with combination 532nm Q-switched Nd:YAG laser followed by 1064nm Q-switched Nd:YAG is more effective: Prospective Study. Dermatologic Surgery, 32, 34-40. </li></ol><small><strong>Photodamage</strong></small><ol start='6'> <li> Berlin, A., MD, Dudelzak, J., MD, Hussain, M., MD, Phelps, R., MD, Goldberg, D., MD. (2008). Evaluation of clinical, microscopic, and ultrastructural changes after treatment with a novel Q-switched Nd:YAG laser. Journal of Cosmetic and Laser Therapy, 10, 76-79. </li><li>Yaghmai, D., MD, Garden, J., MD, Bakus, A., PhD, Gold, M., MD, Saal, B., MD, Goldberg, D., MD, Massa, M., MD. (2010). Photodamage therapy using an electro-optic Q-switched Nd:YAG laser. Lasers in Surgery and Medicine, 42, 699-705. </li></ol>"
            }
          ]
        },
        {
          "id": 13,
          "categories_ids": [4],
          "slug": "revlite",
          "title": "RevLite® SI",
          "desc": "High-powered Q-Switched Nd: YAG laser for skin revitalization and pigmentary and tattoo treatments.",
          "info": "Our high-powered RevLite SI treats everything from pigmented lesions to fine lines and wrinkles, and colorful tattoos.",
          "img": "/imgs/p_14.png",
          "img_big": "/imgs/p_14_big.png",
          "sections": [
            {
              "id": 1,
              "title": "How it works",
              "html": "<strong>Power, versatility, and flexibility</strong><p>Rely on 1064nm and 532nm wavelengths for powerful non-ablative skin resurfacing, reducing wrinkle and acne scars, treating pigmented lesions including melasma as well as a spectrum of tattoo colors — all with our Revlite SI laser.</p><ul> <li>SmartInfinite™ (SI) handpiece</li><li>MultiLite™ dye handpieces</li><li>532Lite™ handpiece</li><li>PhotoAcoustic Technology Pulse™ (PTP) mode</li><li>Precision beam technology</li></ul><strong>Precision, performance, and patient comfort</strong><p>Leverage our innovative handpieces to optimize and expand capabilities. Use the SI handpiece for 0.1mm adjustments in spot sizes and automatic device recognition, enabling fast, precise treatments. For small pigmented lesions requiring low fluences, our 532Lite handpiece provides the control and targeted precision you need. PTP mode enables greater energy delivery by delivering two pulses microseconds apart which is designed to improve results and enhance patient comfort.</p>"
            },
            {
              "id": 2,
              "title": "Before & After†",
              "beforeAfter": [
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Revlite.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Revlite.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Revlite-2.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Revlite-2.jpeg"    
                },
                {
                  "before": "https://www.cynosure.com/wp-content/uploads/2018/09/Before-Revlite-4.jpeg",
                  "after": "https://www.cynosure.com/wp-content/uploads/2018/09/After-Revlite-4.jpeg"    
                }
              ]
            },
            {
              "id": 3,
              "title": "Indications",
              "html": "<ul><li>Epidermal and dermal pigmented lesions</li><li>Fine wrinkles, scars and acne</li><li>Skin revitalization</li><li>All-color tattoo removal</li></ul>"
            },
            {
              "id": 4,
              "title": "Clinical Data",
              "html": "<p><strong>Peer reviewed</strong></p><small>Tattoo</small><ol><li>Gold, M., MD. (2009). Tattoo removal with an electro-optic Q-switched Nd:YAG laser with a unique pulse dispersion. (April 2009). Cosmetic Dermatology, 22 (4).</li><li>Karsai, S., MD, Pfirrmann, G., MD, Hammes, S., MD, Raulin, C., MD. (2008). Treatment of resistant tattoos using a new generation Q-switched Nd:YAG laser: Influence of beam profile and spot size on clearance success. Lasers in Surgery and Medicine, 40, 139–145.</li></ol><small>Pigmentation | Hori’s Nevus</small><ol><li>Hock Leong EE, MBBS, MRCP(UK), Chee Leok Goh, MBBS, FRCP(UK), Khoo, ES-Y. Chan, PhD, Por Ang, MBBS, MRCP(UK). (2006). Treatment of acquired bilateral nevus of ota-like macules (Hori’s Nevus) with combination 532nm Q-switched Nd:YAG laser followed by 1064nm Q-switched Nd:YAG is more effective: Prospective Study. Dermatologic Surgery, 32, 34–40.</li></ol><small>Photodamage</small><ol><li>Berlin, A., MD, Dudelzak, J., MD, Hussain, M., MD, Phelps, R., MD, Goldberg, D., MD. (2008). Evaluation of clinical, microscopic, and ultrastructural changes after treatment with a novel Q-switched Nd:YAG laser. Journal of Cosmetic and Laser Therapy, 10, 76–79.</li><li>Yaghmai, D., MD, Garden, J., MD, Bakus, A., PhD, Gold, M., MD, Saal, B., MD, Goldberg, D., MD, Massa, M., MD. (2010). Photodamage therapy using an electro-optic Q-switched Nd:YAG laser. Lasers in Surgery and Medicine, 42, 699–705.</li></ol>"
            }
          ]
        },
      ]
        
    }
  }

  render() {
    return (

        <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" render={(props) => ( <Home categories={this.state.categories}/> )} />
            <Route exact path="/:category" render={(props) => ( <Category categories={this.state.categories} category={props.match.params.category} products={this.state.products} /> )} />
            <Route exact path="/:category/:product" render={(props) => ( <Product categories={this.state.categories} category={props.match.params.category} products={this.state.products} product={props.match.params.product} /> )} />
          </AnimatedSwitch>
        </Router>
    );
  }
}

class Home extends Component {
  
  render() {
    const HomeMenu = this.props.categories.map((category) =>
      <div className="category" key={category.id}>
        <Link to={category.slug}>
          <div className="img">
            <img src={category.img} alt="{category.title}"/>
          </div> 
          <strong className="headline">
            {category.title}
          </strong>
          <p className="subtitle">
            {category.desc}
          </p>
        </Link>
      </div>
    );
    return (
      <div id="home">
        <div id="header">
          <div id="logo">
            <Link to="/">
              <img src={"../imgs/logo-cynasure-primary.svg"} alt="CynosureIMCAS"/>
            </Link>
          </div>
        </div>
        <div id="home-menu">
          {HomeMenu}
        </div>
      </div>
    );
  }
}

class Category extends Component {
  render() {

    const active_category = this.props.categories.find(category => category.slug === this.props.category);

    // check if category is valid
    if(active_category) {

      const productsMatch = this.props.products.filter(function (product) {
          return product.categories_ids.includes(active_category.id);
      });

      const products = productsMatch.map((product) =>
        <div className="col-sm-6 col-md-3" key={product.id}>
          <Link to={`${active_category.slug}/${product.slug}`} className="product">
            <div className="img">
              <img src={product.img} alt="{product.title}"/>
            </div> 
            <strong className="headline">
              {product.title}
            </strong>
            <p className="subtitle">
              {product.desc}
            </p>
          </Link>
        </div>
      );

      return (
        
        <div className="category">
          <InsideHeader categories={this.props.categories} category={active_category} />

          <div className="container-fluid">
            <div className="product-inside">
              <div className="row">
                <div className="col-md-2">
                  <h1>Products</h1>
                  <h2>{active_category.title}</h2>
                </div>
                <div className="col-md-10">
                  <div className="row products">
                    { products }
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    }
    else {
      return "not-found";
    }
  }
}

class Product extends Component {

  constructor() {
    super();
    this.state = { 
      activeSectionID: null,
      isTop: false,
      goUp: false,
    }
  }

  sectionsRefs = [];
  
  setRef = (ref) => {
    this.sectionsRefs.push(ref);
  }

  componentDidMount() {
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('scroll', () => {
      this.setState({ goUp: window.scrollY > 10 });
      const isTop = window.scrollY > 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });

  }

  goUp = (e) => {
    e.preventDefault();
    window.scrollTo({
        top:0, 
        behavior: "smooth"   // Optional, adds animation
    });

  }

  viewSection = (e, id) => {
    e.preventDefault();
    var id = id - 1;
    
    this.setState({activeSectionID:id+1});

    this.sectionsRefs.map((section) =>
      section.classList.remove('show')
    );
  
    this.sectionsRefs[id].classList.toggle('show');

    window.scrollTo({
        top:this.sectionsRefs[id].offsetTop, 
        behavior: "smooth"   // Optional, adds animation
    });

  }


  render() {

    //https://codepen.io/mimoduo/pen/Vawydp

    const active_category = this.props.categories.find(category => category.slug === this.props.category);
    const active_product = this.props.products.find(product => product.slug === this.props.product);
    const {activeSectionID, isTop, goUp} = this.state;


    // check if category is valid
    if(active_category && active_product) {

      const sections_nav = active_product.sections.map((section) =>
        <li key={section.id} className={activeSectionID == section.id ? 'active' : ''}>
          <a href="#" onClick={(e) => this.viewSection(e, section.id)}>
            {section.title.replace("†", "")}
          </a>
        </li>
      );
      

      const reactBeforeAfter = active_product.sections[1].beforeAfter.map((ba) =>
        <div className="before-after" style={{ maxWidth: '560px' }}><ReactCompareImage leftImage={ba.before} rightImage={ba.after}/><small>†Models used for illustrative purposes only. Individual results may vary and are not guaranteed.</small></div>
      );
      
      const sections = active_product.sections.map((section) =>

        <div className="product-section" ref={this.setRef} key={section.id}>
          <h3 className="headline">{section.title}</h3>
          {section.title == "Before & After†" ? null : <div dangerouslySetInnerHTML={{__html: section.html}}></div>}
        
        </div>
      );
    
      return (
        
        <div className="category">
          <InsideHeader categories={this.props.categories} category={active_category} />

          <div id='return-to-top' onClick={(e) => this.goUp(e)} className={goUp ? 'active' : null}></div>
          <div className="product-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="product-img">
                    <img src={active_product.img_big} alt="{active_product.title}"/>
                  </div>
                </div>
                <div className="col-md-8">
                  <h1>{ active_product.title }</h1>
                  <p className="product-subinfo">{ active_product.desc }</p>

                  <div className={isTop ? "product-nav stick": "product-nav"}>
                    <ul>
                      {sections_nav}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="product-inside">
              <div className="row">
                <div className="col-md-8 col-md-offset-3">

                  <div className="product-page">
                    {sections}
                    {activeSectionID == 2 ? reactBeforeAfter : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    }
    else {
      return "not-found";
    }
  }
}


class InsideHeader extends Component {

  render() {

      const menu = this.props.categories.map((category) => {
        if(this.props.category.slug === category.slug)
          return <li key={category.id} className="active"><Link to={"/"+category.slug}>{category.title}</Link></li>
        else
          return <li key={category.id}><Link to={"/"+category.slug}>{category.title}</Link></li>
      });

      return (
        <nav>
          <div className="container-fluid">
            <div className="nav-container">
              <div className="logo">
                <Link to="/">
                  <img src={"../imgs/logo-white.svg"} alt="CynosureIMCAS"/>
                </Link>
              </div>
              <div className="navbar">
                <ul>
                  { menu }
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )
  }
}


export default App;
