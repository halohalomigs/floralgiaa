function startup() {
	const appear = document.getElementById("body");

	appear.style.opacity = '1';
	appear.style.visibility = 'visible';
}

function activate() {
	const fadeout = document.getElementById("splash-page");
	const fadein = document.getElementById("functions");
	const fadeinInfo = document.getElementById("main-box");
	const fadeinbar = document.getElementById("buttons-bar");
	const fadeinBA = document.getElementById("bonus-author");
	const fadeinback = document.getElementById("button-back");
	const fadeinlogo = document.getElementById("logo");
	const fadeinshadowTop = document.getElementById("shadow-top");
	const fadeinshadowBottom = document.getElementById("shadow-bottom");
	const fadeingreetings = document.getElementById("greetings-main");

	fadeout.style.opacity = '0';
	fadeout.style.visibility = 'hidden';

	fadein.style.opacity = '1';
	fadein.style.visibility = 'visible';
	fadeinInfo.style.opacity = '1';
	fadeinInfo.style.visibility = 'visible';
	fadeinbar.style.opacity = '1';
	fadeinbar.style.visibility = 'visible';
	fadeinBA.style.opacity = '1';
	fadeinBA.style.visibility = 'visible';
	fadeinBA.style.display = "block";
	fadeinback.style.opacity = '1';
	fadeinback.style.visibility = 'visible';
	fadeinlogo.style.opacity = '1';
	fadeinlogo.style.visibility = 'visible';
	fadeinshadowTop.style.opacity = '1';
	fadeinshadowTop.style.visibility = 'visible';
	fadeinshadowTop.style.display = "block";
	fadeinshadowBottom.style.opacity = '1';
	fadeinshadowBottom.style.visibility = 'visible';
	fadeinshadowBottom.style.display = "block";
	fadeingreetings.style.opacity = '1';
	fadeingreetings.style.visibility = 'visible';
	fadeingreetings.style.display = "block";
}

function deactivate() {
	const fadeoutOne = document.getElementById("functions");
	const fadeoutTwo = document.getElementById("bonus-author");
	const fadeoutInfo = document.getElementById("main-box");
	const fadeoutBar = document.getElementById("buttons-bar");
	const fadeoutBack = document.getElementById("button-back");
	const fadeoutBA = document.getElementById("bonus-author");
	const fadeoutLogo = document.getElementById("logo");
	const fadeoutShadowTop = document.getElementById("shadow-top");
	const fadeoutShadowBottom = document.getElementById("shadow-bottom");
	const fadeoutGreetings = document.getElementById("greetings-main");
	const fadein = document.getElementById("splash-page");

	fadeoutOne.style.opacity = '0';
	fadeoutOne.style.visibility = "hidden";
	fadeoutTwo.style.opacity = '0';
	fadeoutTwo.style.visibility = "hidden";
	fadeoutInfo.style.opacity = '0';
	fadeoutInfo.style.visibility = 'hidden';
	fadeoutBar.style.opacity = '0';
	fadeoutBar.style.visibility = "hidden";
	fadeoutBack.style.opacity = '0';
	fadeoutBack.style.visibility = "hidden";
	fadeoutBA.style.opacity = '0';
	fadeoutBA.style.visibility = 'hidden';
	fadeoutBA.style.display = 'none';
	fadeoutLogo.style.opacity = '0';
	fadeoutLogo.style.visibility = "hidden";
	fadeoutShadowTop.style.opacity = '0';
	fadeoutShadowTop.style.visibility = 'hidden';
	fadeoutShadowTop.style.display = "none";
	fadeoutShadowBottom.style.opacity = '0';
	fadeoutShadowBottom.style.visibility = 'hidden';
	fadeoutShadowBottom.style.display = "none";
	fadeoutGreetings.style.opacity = '0';
	fadeoutGreetings.style.visibility = 'visible';
	fadeoutGreetings.style.display = 'none';

	fadein.style.opacity = '1';
	fadein.style.visibility = "visible";
	document.getElementById("background").style.background = 'white';
	document.getElementById("shadow-top").style.background = 'white';
}

function cell() {
	const modeOne = document.getElementById("background");
	const modeTwo = document.getElementById("bigBox");
	const modeThree = document.getElementById("smallBox");
	const modeFour = document.getElementById("plant-img");
	const modeFive = document.getElementById("cell-img");

	modeOne.style.background = 'white';
	modeTwo.style.background = '#679a8f';
	modeThree.style.background = "#eaeaea";
	modeFour.style.opacity = '0';
	modeFour.style.visibility = 'hidden';
	modeFive.style.opacity = '1';
	modeFive.style.visibility = 'visible';

	document.getElementById("image").src = 'img/holder-cell.jpg';
	document.getElementById("source").src = 'img/backOne.png';
	document.getElementById("shadow-top").style.background = 'white';
	document.getElementById("info").innerHTML = "The text will appear once you click on a circle above!";
	document.getElementById("heading").innerHTML = "Click on a circle!";
	document.getElementById("function-title").innerHTML = "PLANT CELL";
	document.getElementById("function-title").style.background = "#3b3b3b";
	document.getElementById("function-title").style.color = "#f2f2f2";
	document.getElementById("function-desc").innerHTML = "Cells are the basic unit of life in all organisms. Plants are made up of eukaryotic cells that are able to perform photosynthesis. The presence of cell wall outside the cell membrane is one of its distinctive aspects. It is rectangular in shape and comparatively larger than the animal cell.";
	document.getElementById("function-desc").style.background = "#f2f2f2";
}

function tissue() {
	const modeOne = document.getElementById("background");
	const modeTwo = document.getElementById("bigBox");
	const modeThree = document.getElementById("smallBox");
	const modeFour = document.getElementById("plant-img");
	const modeFive = document.getElementById("cell-img");

	modeOne.style.background = '#D2FAEE';
	modeTwo.style.background = '#65af9f';
	modeThree.style.background = "#96DECB";
	modeFour.style.opacity = '1';
	modeFour.style.visibility = 'visible';
	modeFive.style.opacity = '0';
	modeFive.style.visibility = 'hidden';

	document.getElementById("image").src = 'img/holder-tissue.jpg';
	document.getElementById("source").src = 'img/backThree.png';
	document.getElementById("shadow-top").style.background = '#D2FAEE';
	document.getElementById("info").innerHTML = "The text will appear once you click on a circle above!";
	document.getElementById("heading").innerHTML = "Click on a circle!";
	document.getElementById("function-title").innerHTML = "PLANT TISSUE";
	document.getElementById("function-title").style.background = "#0D695E";
	document.getElementById("function-title").style.color = "white";
	document.getElementById("function-desc").innerHTML = "Plant tissues are a collection of cells which perform specific functions. They are specialized, and can be combined with other tissues to assemble organs such as leaves, flowers, stems, and roots. In plants, there are four main types of tissues: Meristematic, Dermal, Vascular, and Ground tissues.";
	document.getElementById("function-desc").style.background = "white";
}

function ShowCell() {
	[].forEach.call(document.querySelectorAll('.absdiv'), function (ewan) {
		ewan.style.visibility = 'visible';
	});
}

function HideCell() {
	[].forEach.call(document.querySelectorAll('.absdiv'), function (ewan) {
		ewan.style.visibility = 'hidden';
	});
}

function ShowTissue() {
	[].forEach.call(document.querySelectorAll('.absdiv2'), function (ewan) {
		ewan.style.visibility = 'visible';
	});
}

function HideTissue() {
	[].forEach.call(document.querySelectorAll('.absdiv2'), function (ewan) {
		ewan.style.visibility = 'hidden';
	});
}

/* --- Cell Functions --- */

function infoNucleus() {
	document.getElementById("info").innerHTML = "The <b>nucleus</b> is a membrane-bound organelle that contains most of the cell's genome which functions to <b>maintain the integrity of genes</b> and <b>control the activities of the cell by regulating gene expression</b>. It is also dubbed as the <b>control center of the cell</b>.";
	document.getElementById("heading").innerHTML = "Nucleus";
	document.getElementById("image").src = "img/nucleus.jpg";
}

function infoCellWall() {
	document.getElementById("info").innerHTML = "This is described as a <b>structural layer</b> surrounding the cell outside the cell membrane. It can be tough, flexible, and sometimes rigid. It functions to provide the cell with both structural support and protection, and acts as a filtering mechanism.";
	document.getElementById("heading").innerHTML = "Cell Wall";
	document.getElementById("image").src = "img/cellwall.jpg";
}

function infoRibosome() {
	document.getElementById("info").innerHTML = "A <b>sphere-shaped structure</b> within the cytoplasm of a cell that is <b>composed of RNA and protein</b>. It is a site of <b>biological protein synthesis</b> or translation by linking amino acids together. They are free in the cytoplasm and often attached to the membrane of the endoplasmic reticulum.";
	document.getElementById("heading").innerHTML = "Ribosome";
	document.getElementById("image").src = "img/ribosome.jpg";
}

function infoChloroplast() {
	document.getElementById("info").innerHTML = "A structure within the cells of plants and green algae that is the site of <b>photosynthesis</b>, the process by which <b>light energy is converted to chemical energy</b>. This results in the production of oxygen and glucose. They are also resposible for the <b>green pigment of plants.<b>";
	document.getElementById("heading").innerHTML = "Chloroplast";
	document.getElementById("image").src = "img/chloroplast.jpg";
}

function infoLysosome() {
	document.getElementById("info").innerHTML = "Lysosome is an <b>organelle in the cytoplasm</b> which is responsible for the <b>digestion of macromolecules, old cell parts, and microorganisms</b>, and is <b>a key organelle in waste removal</b>. It is surrounded by a membrane that <b>maintains an acidic environment</b> in the interior.";
	document.getElementById("heading").innerHTML = "Lysosome";
	document.getElementById("image").src = "img/lysosome.jpg";
}

function infoVacuole() {
	document.getElementById("info").innerHTML = "Vacuoles are <b>spaces within a cell</b> that <b>are empty of cytoplasm, lined with a membrane, and filled with fluid</b>. It Perform functions such as <b>storage, ingestion, digestion, excretion, and expulsion of excess water</b>.  It is often the largest organelle in the cell";
	document.getElementById("heading").innerHTML = "Vacuole";
	document.getElementById("image").src = "img/vacuole.jpg";
}

function infoCytoplasm() {
	document.getElementById("info").innerHTML = "It can also be called <b>protoplasm</b>. With a clear in color and gel-like appearance, it <b>consists of all of the contents outside of the nucleus and enclosed within the cell membrane of a cell</b>. It is responsible for giving shape and keeping organelles in their place.";
	document.getElementById("heading").innerHTML = "Cytoplasm";
	document.getElementById("image").src = "img/cytoplasm.jpg";
}

function infoMitochondrion() {
	document.getElementById("info").innerHTML = "This is a membrane-bound organelle inside the cytoplasm whose main job is to <b>convert energy by oxidizing glucose to produce adenosine triphosphate</b> (ATP), which is used by cells to function. It does this through a process called <b>cellular respiration</b>.";
	document.getElementById("heading").innerHTML = "Mitochondrion";
	document.getElementById("image").src = "img/mitochondrion.jpg";
}

function infoEreticulum() {
	document.getElementById("info").innerHTML = "The <b>endoplasmic reticulum</b> is a continuous membrane system that forms <b>a series of flattened sacs within the cytoplasm of eukaryotic cells</b> and serves multiple functions. It is also an important particularly in the <b>synthesis, folding, modification, and transport of proteins</b>.";
	document.getElementById("heading").innerHTML = "Endoplasmic Reticulum";
	document.getElementById("image").src = "img/endoplasmicreticulum.jpg";
}

function infoGcomplex() {
	document.getElementById("info").innerHTML = "It can be described as a membrane-bound organelle <b>made up of a series of flattened, stacked pouches</b> called <b>cisternae</b>. Additionally, it is responsible for transporting, modifying, and packaging proteins and lipids into vesicles for delivery.";
	document.getElementById("heading").innerHTML = "Golgi Complex";
	document.getElementById("image").src = "img/golgicomplex.jpg";
}

/* --- Tissue Functions --- */

function infoDermal() {
	document.getElementById("info").innerHTML = "Dermal tissues are found at the <b>outermost parts of the plant</b> - except for trees and shrubs that have bark. They <b>protect the plant from injury and water loss</b>, and <b>give way for gases and water to travel</b>. The most common dermal tissue is the epidermal tissue which is covered by a waxy layer called a <b>cuticle</b>. ";
	document.getElementById("heading").innerHTML = "Dermal Tissue";
	document.getElementById("image").src = "img/dermal.jpg";
}

function infoMeristem() {
	document.getElementById("info").innerHTML = "These are a group of cells which <b>divide continuously to add new cells to the body of the plant</b>. The cell walls composing meristems are thin, have a high rate of metabolism, and contain lots of cytoplasm. They are <b>found at the roots, shoots, sides of the stem and at the base of leaves.</b>";
	document.getElementById("heading").innerHTML = "Meristematic Tissue";
	document.getElementById("image").src = "img/meristem.jpg";
}

function infoVxylem() {
	document.getElementById("info").innerHTML = "<p class='caption'>Vascular tissues are an arrangement of multiple cells in vascular plants that conduct or move substances across the plant. They also serve to provide support for the plant&#39;s external parts. </p> The xylem <b>transports water and minerals</b> through its vessel elements <b>from the roots to its leaves</b>. Although dead at maturity, its cell walls remain for water to flow freely.";
	document.getElementById("heading").innerHTML = "Vascular Tissue - Xylem";
	document.getElementById("image").src = "img/xylem.jpg";
}

function infoVphloem() {
	document.getElementById("info").innerHTML = "<p class='caption'>Vascular tissues are an arrangement of multiple cells in vascular plants that conduct or move substances across the plant. They also serve to provide support for the plant&#39;s external parts. </p> Phloem <b>transports sugars</b> produced by the leaves from photosynthesis <b>throughout the plant</b>.";
	document.getElementById("heading").innerHTML = "Vascular Tissue - Phloem";
	document.getElementById("image").src = "img/phloem.jpg";
}

function infoGparenchyma() {
	document.getElementById("info").innerHTML = "<p class='caption'>Ground tissues have thin walls, many chloroplasts, and form the mass of most leaves, stems, and roots. Its main functions are photosynthesis, food storage, tissue regeneration, and plant support. </p> Parenchyma are the <b>unspecialized major cells of the plant</b> which make up the leaves and are responsible for <b>metabolism and food production</b>.";
	document.getElementById("heading").innerHTML = "Ground Tissue - Parenchyma";
	document.getElementById("image").src = "img/parenchyma.jpg";
}

function infoGcollenchyma() {
	document.getElementById("info").innerHTML = "<p class='caption'>Ground tissues have thin walls, many chloroplasts, and form the mass of most leaves, stems, and roots. Its main functions are photosynthesis, food storage, tissue regeneration, and plant support. </p> Compared to the sclerenchyma, collenchyma are living cells that are semi-rigid. They <b>provide support when the plant is young</b>, growing and stretching as the plant grows.";
	document.getElementById("heading").innerHTML = "Ground Tissue - Collenchyma";
	document.getElementById("image").src = "img/collenchyma.jpg";
}

function infoGsclerenchyma() {
	document.getElementById("info").innerHTML = "<p class='caption'>Ground tissues have thin walls, many chloroplasts, and form the mass of most leaves, stems, and roots. Its main functions are photosynthesis, food storage, tissue regeneration, and plant support. </p> Sclerenchyma consists of dead cells and usually do not live past maturity. They have <b>rigid primary and secondary cell walls</b> that <b>provide support for the plant</b>.";
	document.getElementById("heading").innerHTML = "Ground Tissue - Sclerenchyma";
	document.getElementById("image").src = "img/sclerenchyma.jpg";
}


/* --- Calc Functions --- */

function Calculate() {
    var water = document.getElementById("water").value;
    var carbonDioxide = document.getElementById("cDioxide").value;
    var remainder1, remainder2;
    var oxygen, glucose;

    remainder1 = water % 6;
    remainder2 = cDioxide % 6;

    if (remainder1 >= 1 || remainder2 >= 1) {
        document.getElementById("water").innerHTML = "sad";
        document.getElementById("oxygen").innerHTML = "sad; please input a value divisible by 6";
        document.getElementById("glucose").innerHTML = "sad";
    }

    if (water >= 6 && carbonDioxide == 0) {
        oxygen = water;
        glucose = water / 6;
        carbonDioxide = water;

        document.getElementById("cDioxide").value = carbonDioxide;
        document.getElementById("oxygen").innerHTML = oxygen;
        document.getElementById("glucose").innerHTML = glucose;
    }

    if (water == 0 && carbonDioxide >= 6) {
        oxygen = carbonDioxide;
        glucose = carbonDioxide / 6;
        water = carbonDioxide;

        document.getElementById("water").value = water;
        document.getElementById("oxygen").innerHTML = oxygen;
        document.getElementById("glucose").innerHTML = glucose;
    }

    if (water >= 6 && carbonDioxide >= 6) {
        if (water > carbonDioxide) {
            oxygen = water;
            glucose = water / 6;
            carbonDioxide = water;

            document.getElementById("cDioxide").value = carbonDioxide;
            document.getElementById("oxygen").innerHTML = oxygen;
            document.getElementById("glucose").innerHTML = glucose;
        }

        if (carbonDioxide > water || carbonDioxide == water) {
            oxygen = carbonDioxide;
            glucose = carbonDioxide / 6;
            water = carbonDioxide;

            document.getElementById("water").value = water;
            document.getElementById("oxygen").innerHTML = oxygen;
            document.getElementById("glucose").innerHTML = glucose;
        }

    }

}

/* --- Greetings --- */

function msg() {

	if (document.getElementById("msgName").value == "Paolo") {
		alert("Hii sir!! Thank you for being able to make CS relevant and enjoyable for us. You brought out the best in us, helping us improve in ComSci and teaching us to think creatively in finding solutions in coding. We're looking forward to the things we can learn from you next quarter. Thanks again sir!");
	}

	if (document.getElementById("msgName").value == "Felipe") {
		alert("Hello sir!! Thank you for being an inspiration to a lot of us! Your patience and passion for teaching Bio make us excited and motivated to learn. The school year wouldn't have been the same without you. We hope you keep inspiring students like us! We're very grateful to have you as our teacher. <3");
	}

	else {
		alert("Happy New Year!");
	}
}