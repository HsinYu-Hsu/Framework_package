var CanvasApp = function () {
			var cy;
			var cyto_scene;

			return {
				Glycine_serine_and_threonine_metabolism: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "MAOB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "AGXT","shape": "ellipse","color":"#FF9797"}}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Metabolic_pathways: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "LDHD","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PGM2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDE1A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HMGCR","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MINPP1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CKMT1A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDE6A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CHPF","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GALNT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PLA2G7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CHPF2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MAOB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ACER1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "LPIN1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "AGXT","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "B3GALT6","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALDH1B1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TST","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HMGCS1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CYP2C18","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GNS","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PGM2L1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALOX12","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CHSY3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TDO2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ADH7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "VKORC1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CYP2C19","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MGLL","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALOX15B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PLOD3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "P4HA3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDE3A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALDH9A1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "UGT1A7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GYS2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ENTPD1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CBR3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GFPT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SGPP2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "AMPD2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MGST2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FUT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "BLVRB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDE4A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "INPPL1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GGT5","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GUCY2C","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ST6GALNAC1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CYP4F3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FUT3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CDS1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GGT6","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GPX3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GUCY1A2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GALNT10","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALDH3A2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GPX8","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GPX7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FUT6","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GDPD3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GANAB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ENPP4","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ARSB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SULT2B1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "DHCR24","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CSGALNACT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ENPP2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ACSS3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FUT8","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GPT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CYP2C9","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HEXA","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V0A4","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PIGT","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ALDH3A1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GSTA4","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ME1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "DGKZ","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "NNMT","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SPHK1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDE1B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GALNT3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PLOD1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MBOAT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ACADSB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PLD3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CYP3A5","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "DEGS2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ST3GAL2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "AKR1B10","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CHSY1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CKMT1B","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e3_91", "source": "LDHD", "target": "MINPP1" }},
									{"group":"edges", "data": { "id": "e3_123", "source": "LDHD", "target": "CHPF" }},
									{"group":"edges", "data": { "id": "e3_153", "source": "LDHD", "target": "GALNT2" }},
									{"group":"edges", "data": { "id": "e3_174", "source": "LDHD", "target": "PLA2G7" }},
									{"group":"edges", "data": { "id": "e3_176", "source": "LDHD", "target": "CHPF2" }},
									{"group":"edges", "data": { "id": "e3_561", "source": "LDHD", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e3_1013", "source": "LDHD", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e3_1021", "source": "LDHD", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e3_1173", "source": "LDHD", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e7_56", "source": "PGM2", "target": "HMGCR" }},
									{"group":"edges", "data": { "id": "e7_461", "source": "PGM2", "target": "PDE3A" }},
									{"group":"edges", "data": { "id": "e7_682", "source": "PGM2", "target": "GGT5" }},
									{"group":"edges", "data": { "id": "e7_714", "source": "PGM2", "target": "CDS1" }},
									{"group":"edges", "data": { "id": "e7_1282", "source": "PGM2", "target": "MBOAT2" }},
									{"group":"edges", "data": { "id": "e56_213", "source": "HMGCR", "target": "ALDH1B1" }},
									{"group":"edges", "data": { "id": "e56_461", "source": "HMGCR", "target": "PDE3A" }},
									{"group":"edges", "data": { "id": "e91_110", "source": "MINPP1", "target": "PDE6A" }},
									{"group":"edges", "data": { "id": "e91_123", "source": "MINPP1", "target": "CHPF" }},
									{"group":"edges", "data": { "id": "e91_153", "source": "MINPP1", "target": "GALNT2" }},
									{"group":"edges", "data": { "id": "e91_174", "source": "MINPP1", "target": "PLA2G7" }},
									{"group":"edges", "data": { "id": "e91_176", "source": "MINPP1", "target": "CHPF2" }},
									{"group":"edges", "data": { "id": "e91_181", "source": "MINPP1", "target": "MAOB" }},
									{"group":"edges", "data": { "id": "e91_188", "source": "MINPP1", "target": "LPIN1" }},
									{"group":"edges", "data": { "id": "e91_234", "source": "MINPP1", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e91_260", "source": "MINPP1", "target": "GNS" }},
									{"group":"edges", "data": { "id": "e91_296", "source": "MINPP1", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e91_346", "source": "MINPP1", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e91_377", "source": "MINPP1", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e91_393", "source": "MINPP1", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e91_426", "source": "MINPP1", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e91_441", "source": "MINPP1", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e91_477", "source": "MINPP1", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e91_484", "source": "MINPP1", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e91_577", "source": "MINPP1", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e91_636", "source": "MINPP1", "target": "BLVRB" }},
									{"group":"edges", "data": { "id": "e91_684", "source": "MINPP1", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e91_695", "source": "MINPP1", "target": "ST6GALNAC1" }},
									{"group":"edges", "data": { "id": "e91_707", "source": "MINPP1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e91_727", "source": "MINPP1", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e91_781", "source": "MINPP1", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e91_830", "source": "MINPP1", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e91_857", "source": "MINPP1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e91_867", "source": "MINPP1", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e91_915", "source": "MINPP1", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e91_1013", "source": "MINPP1", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e91_1021", "source": "MINPP1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e91_1058", "source": "MINPP1", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e91_1063", "source": "MINPP1", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e91_1084", "source": "MINPP1", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e91_1120", "source": "MINPP1", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e91_1278", "source": "MINPP1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e91_1319", "source": "MINPP1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e91_1341", "source": "MINPP1", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e102_153", "source": "CKMT1A", "target": "GALNT2" }},
									{"group":"edges", "data": { "id": "e102_550", "source": "CKMT1A", "target": "SGPP2" }},
									{"group":"edges", "data": { "id": "e102_1475", "source": "CKMT1A", "target": "CKMT1B" }},
									{"group":"edges", "data": { "id": "e110_123", "source": "PDE6A", "target": "CHPF" }},
									{"group":"edges", "data": { "id": "e110_174", "source": "PDE6A", "target": "PLA2G7" }},
									{"group":"edges", "data": { "id": "e110_176", "source": "PDE6A", "target": "CHPF2" }},
									{"group":"edges", "data": { "id": "e110_426", "source": "PDE6A", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e110_839", "source": "PDE6A", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e110_1013", "source": "PDE6A", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e110_1021", "source": "PDE6A", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e110_1084", "source": "PDE6A", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e110_1278", "source": "PDE6A", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e123_153", "source": "CHPF", "target": "GALNT2" }},
									{"group":"edges", "data": { "id": "e123_176", "source": "CHPF", "target": "CHPF2" }},
									{"group":"edges", "data": { "id": "e123_181", "source": "CHPF", "target": "MAOB" }},
									{"group":"edges", "data": { "id": "e123_196", "source": "CHPF", "target": "AGXT" }},
									{"group":"edges", "data": { "id": "e123_199", "source": "CHPF", "target": "B3GALT6" }},
									{"group":"edges", "data": { "id": "e123_234", "source": "CHPF", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e123_296", "source": "CHPF", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e123_346", "source": "CHPF", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e123_359", "source": "CHPF", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e123_377", "source": "CHPF", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e123_393", "source": "CHPF", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e123_426", "source": "CHPF", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e123_441", "source": "CHPF", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e123_476", "source": "CHPF", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e123_484", "source": "CHPF", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e123_577", "source": "CHPF", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e123_636", "source": "CHPF", "target": "BLVRB" }},
									{"group":"edges", "data": { "id": "e123_684", "source": "CHPF", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e123_695", "source": "CHPF", "target": "ST6GALNAC1" }},
									{"group":"edges", "data": { "id": "e123_707", "source": "CHPF", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e123_781", "source": "CHPF", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e123_830", "source": "CHPF", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e123_857", "source": "CHPF", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e123_867", "source": "CHPF", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e123_915", "source": "CHPF", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e123_1058", "source": "CHPF", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e123_1063", "source": "CHPF", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e123_1081", "source": "CHPF", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e123_1084", "source": "CHPF", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e123_1089", "source": "CHPF", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e123_1120", "source": "CHPF", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e123_1278", "source": "CHPF", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e123_1297", "source": "CHPF", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e123_1319", "source": "CHPF", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e123_1341", "source": "CHPF", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e153_176", "source": "GALNT2", "target": "CHPF2" }},
									{"group":"edges", "data": { "id": "e153_181", "source": "GALNT2", "target": "MAOB" }},
									{"group":"edges", "data": { "id": "e153_188", "source": "GALNT2", "target": "LPIN1" }},
									{"group":"edges", "data": { "id": "e153_199", "source": "GALNT2", "target": "B3GALT6" }},
									{"group":"edges", "data": { "id": "e153_234", "source": "GALNT2", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e153_296", "source": "GALNT2", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e153_346", "source": "GALNT2", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e153_377", "source": "GALNT2", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e153_393", "source": "GALNT2", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e153_441", "source": "GALNT2", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e153_477", "source": "GALNT2", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e153_550", "source": "GALNT2", "target": "SGPP2" }},
									{"group":"edges", "data": { "id": "e153_561", "source": "GALNT2", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e153_661", "source": "GALNT2", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e153_695", "source": "GALNT2", "target": "ST6GALNAC1" }},
									{"group":"edges", "data": { "id": "e153_699", "source": "GALNT2", "target": "CYP4F3" }},
									{"group":"edges", "data": { "id": "e153_707", "source": "GALNT2", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e153_727", "source": "GALNT2", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e153_781", "source": "GALNT2", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e153_827", "source": "GALNT2", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e153_830", "source": "GALNT2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e153_857", "source": "GALNT2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e153_867", "source": "GALNT2", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e153_915", "source": "GALNT2", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e153_1021", "source": "GALNT2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e153_1058", "source": "GALNT2", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e153_1063", "source": "GALNT2", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e153_1084", "source": "GALNT2", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e153_1120", "source": "GALNT2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e153_1151", "source": "GALNT2", "target": "ME1" }},
									{"group":"edges", "data": { "id": "e153_1173", "source": "GALNT2", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e153_1278", "source": "GALNT2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e153_1297", "source": "GALNT2", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e153_1319", "source": "GALNT2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e174_181", "source": "PLA2G7", "target": "MAOB" }},
									{"group":"edges", "data": { "id": "e174_188", "source": "PLA2G7", "target": "LPIN1" }},
									{"group":"edges", "data": { "id": "e174_196", "source": "PLA2G7", "target": "AGXT" }},
									{"group":"edges", "data": { "id": "e174_216", "source": "PLA2G7", "target": "TST" }},
									{"group":"edges", "data": { "id": "e174_234", "source": "PLA2G7", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e174_260", "source": "PLA2G7", "target": "GNS" }},
									{"group":"edges", "data": { "id": "e174_296", "source": "PLA2G7", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e174_332", "source": "PLA2G7", "target": "TDO2" }},
									{"group":"edges", "data": { "id": "e174_346", "source": "PLA2G7", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e174_377", "source": "PLA2G7", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e174_393", "source": "PLA2G7", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e174_441", "source": "PLA2G7", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e174_476", "source": "PLA2G7", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e174_484", "source": "PLA2G7", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e174_577", "source": "PLA2G7", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e174_636", "source": "PLA2G7", "target": "BLVRB" }},
									{"group":"edges", "data": { "id": "e174_684", "source": "PLA2G7", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e174_695", "source": "PLA2G7", "target": "ST6GALNAC1" }},
									{"group":"edges", "data": { "id": "e174_707", "source": "PLA2G7", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e174_727", "source": "PLA2G7", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e174_781", "source": "PLA2G7", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e174_830", "source": "PLA2G7", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e174_857", "source": "PLA2G7", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e174_867", "source": "PLA2G7", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e174_1013", "source": "PLA2G7", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e174_1021", "source": "PLA2G7", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e174_1058", "source": "PLA2G7", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e174_1063", "source": "PLA2G7", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e174_1084", "source": "PLA2G7", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e174_1120", "source": "PLA2G7", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e174_1319", "source": "PLA2G7", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e174_1341", "source": "PLA2G7", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e176_181", "source": "CHPF2", "target": "MAOB" }},
									{"group":"edges", "data": { "id": "e176_196", "source": "CHPF2", "target": "AGXT" }},
									{"group":"edges", "data": { "id": "e176_199", "source": "CHPF2", "target": "B3GALT6" }},
									{"group":"edges", "data": { "id": "e176_234", "source": "CHPF2", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e176_296", "source": "CHPF2", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e176_346", "source": "CHPF2", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e176_359", "source": "CHPF2", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e176_377", "source": "CHPF2", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e176_393", "source": "CHPF2", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e176_426", "source": "CHPF2", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e176_441", "source": "CHPF2", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e176_477", "source": "CHPF2", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e176_484", "source": "CHPF2", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e176_561", "source": "CHPF2", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e176_577", "source": "CHPF2", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e176_636", "source": "CHPF2", "target": "BLVRB" }},
									{"group":"edges", "data": { "id": "e176_661", "source": "CHPF2", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e176_684", "source": "CHPF2", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e176_707", "source": "CHPF2", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e176_781", "source": "CHPF2", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e176_827", "source": "CHPF2", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e176_830", "source": "CHPF2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e176_839", "source": "CHPF2", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e176_857", "source": "CHPF2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e176_915", "source": "CHPF2", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e176_1058", "source": "CHPF2", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e176_1063", "source": "CHPF2", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e176_1081", "source": "CHPF2", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e176_1084", "source": "CHPF2", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e176_1089", "source": "CHPF2", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e176_1120", "source": "CHPF2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e176_1278", "source": "CHPF2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e176_1297", "source": "CHPF2", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e176_1319", "source": "CHPF2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e181_915", "source": "MAOB", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e181_1013", "source": "MAOB", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e181_1021", "source": "MAOB", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e181_1278", "source": "MAOB", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e184_280", "source": "ACER1", "target": "PGM2L1" }},
									{"group":"edges", "data": { "id": "e184_784", "source": "ACER1", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e184_839", "source": "ACER1", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e184_1013", "source": "ACER1", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e184_1021", "source": "ACER1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e188_577", "source": "LPIN1", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e188_857", "source": "LPIN1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e188_1013", "source": "LPIN1", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e188_1021", "source": "LPIN1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e188_1278", "source": "LPIN1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e196_199", "source": "AGXT", "target": "B3GALT6" }},
									{"group":"edges", "data": { "id": "e196_359", "source": "AGXT", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e196_426", "source": "AGXT", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e196_915", "source": "AGXT", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e196_1081", "source": "AGXT", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e196_1084", "source": "AGXT", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e196_1157", "source": "AGXT", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e196_1278", "source": "AGXT", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e199_234", "source": "B3GALT6", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e199_296", "source": "B3GALT6", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e199_346", "source": "B3GALT6", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e199_561", "source": "B3GALT6", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e199_661", "source": "B3GALT6", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e199_707", "source": "B3GALT6", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e199_830", "source": "B3GALT6", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e199_857", "source": "B3GALT6", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e199_1089", "source": "B3GALT6", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e199_1278", "source": "B3GALT6", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e199_1315", "source": "B3GALT6", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e199_1319", "source": "B3GALT6", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e199_1372", "source": "B3GALT6", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e213_216", "source": "ALDH1B1", "target": "TST" }},
									{"group":"edges", "data": { "id": "e213_234", "source": "ALDH1B1", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e213_280", "source": "ALDH1B1", "target": "PGM2L1" }},
									{"group":"edges", "data": { "id": "e213_296", "source": "ALDH1B1", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e213_377", "source": "ALDH1B1", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e213_393", "source": "ALDH1B1", "target": "MGLL" }},
									{"group":"edges", "data": { "id": "e213_476", "source": "ALDH1B1", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e213_515", "source": "ALDH1B1", "target": "CBR3" }},
									{"group":"edges", "data": { "id": "e213_550", "source": "ALDH1B1", "target": "SGPP2" }},
									{"group":"edges", "data": { "id": "e213_614", "source": "ALDH1B1", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e213_707", "source": "ALDH1B1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e213_727", "source": "ALDH1B1", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e213_857", "source": "ALDH1B1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e213_867", "source": "ALDH1B1", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e213_966", "source": "ALDH1B1", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e213_1063", "source": "ALDH1B1", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e213_1319", "source": "ALDH1B1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e216_234", "source": "TST", "target": "CYP2C18" }},
									{"group":"edges", "data": { "id": "e216_280", "source": "TST", "target": "PGM2L1" }},
									{"group":"edges", "data": { "id": "e216_359", "source": "TST", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e216_377", "source": "TST", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e216_426", "source": "TST", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e216_461", "source": "TST", "target": "PDE3A" }},
									{"group":"edges", "data": { "id": "e216_476", "source": "TST", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e216_707", "source": "TST", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e216_784", "source": "TST", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e216_839", "source": "TST", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e216_1013", "source": "TST", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e216_1021", "source": "TST", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e216_1089", "source": "TST", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e216_1319", "source": "TST", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e234_260", "source": "CYP2C18", "target": "GNS" }},
									{"group":"edges", "data": { "id": "e234_280", "source": "CYP2C18", "target": "PGM2L1" }},
									{"group":"edges", "data": { "id": "e234_296", "source": "CYP2C18", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e234_359", "source": "CYP2C18", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e234_377", "source": "CYP2C18", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e234_426", "source": "CYP2C18", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e234_450", "source": "CYP2C18", "target": "P4HA3" }},
									{"group":"edges", "data": { "id": "e234_561", "source": "CYP2C18", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e234_614", "source": "CYP2C18", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e234_661", "source": "CYP2C18", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e234_707", "source": "CYP2C18", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e234_784", "source": "CYP2C18", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e234_827", "source": "CYP2C18", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e234_839", "source": "CYP2C18", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e234_855", "source": "CYP2C18", "target": "GPX7" }},
									{"group":"edges", "data": { "id": "e234_857", "source": "CYP2C18", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e234_867", "source": "CYP2C18", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e234_915", "source": "CYP2C18", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e234_964", "source": "CYP2C18", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e234_966", "source": "CYP2C18", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e234_1013", "source": "CYP2C18", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e234_1021", "source": "CYP2C18", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e234_1039", "source": "CYP2C18", "target": "FUT8" }},
									{"group":"edges", "data": { "id": "e234_1063", "source": "CYP2C18", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e234_1081", "source": "CYP2C18", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e234_1089", "source": "CYP2C18", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e234_1157", "source": "CYP2C18", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e234_1173", "source": "CYP2C18", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e234_1278", "source": "CYP2C18", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e234_1319", "source": "CYP2C18", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e234_1372", "source": "CYP2C18", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e260_296", "source": "GNS", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e260_346", "source": "GNS", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e260_359", "source": "GNS", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e260_377", "source": "GNS", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e260_441", "source": "GNS", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e260_484", "source": "GNS", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e260_707", "source": "GNS", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e260_727", "source": "GNS", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e260_827", "source": "GNS", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e260_839", "source": "GNS", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e260_857", "source": "GNS", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e260_915", "source": "GNS", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e260_964", "source": "GNS", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e260_1013", "source": "GNS", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e260_1021", "source": "GNS", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e260_1081", "source": "GNS", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e260_1084", "source": "GNS", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e260_1120", "source": "GNS", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e260_1315", "source": "GNS", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e260_1319", "source": "GNS", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e260_1454", "source": "GNS", "target": "CHSY1" }},
									{"group":"edges", "data": { "id": "e280_296", "source": "PGM2L1", "target": "ALOX12" }},
									{"group":"edges", "data": { "id": "e280_377", "source": "PGM2L1", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e280_441", "source": "PGM2L1", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e280_476", "source": "PGM2L1", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e280_515", "source": "PGM2L1", "target": "CBR3" }},
									{"group":"edges", "data": { "id": "e280_614", "source": "PGM2L1", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e280_636", "source": "PGM2L1", "target": "BLVRB" }},
									{"group":"edges", "data": { "id": "e280_707", "source": "PGM2L1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e280_727", "source": "PGM2L1", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e280_839", "source": "PGM2L1", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e280_857", "source": "PGM2L1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e280_867", "source": "PGM2L1", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e280_966", "source": "PGM2L1", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e280_1021", "source": "PGM2L1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e280_1058", "source": "PGM2L1", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e280_1063", "source": "PGM2L1", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e280_1120", "source": "PGM2L1", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e280_1319", "source": "PGM2L1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e296_332", "source": "ALOX12", "target": "TDO2" }},
									{"group":"edges", "data": { "id": "e296_359", "source": "ALOX12", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e296_426", "source": "ALOX12", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e296_519", "source": "ALOX12", "target": "GFPT2" }},
									{"group":"edges", "data": { "id": "e296_561", "source": "ALOX12", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e296_661", "source": "ALOX12", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e296_784", "source": "ALOX12", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e296_827", "source": "ALOX12", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e296_839", "source": "ALOX12", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e296_915", "source": "ALOX12", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e296_964", "source": "ALOX12", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e296_1013", "source": "ALOX12", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e296_1021", "source": "ALOX12", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e296_1081", "source": "ALOX12", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e296_1089", "source": "ALOX12", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e296_1170", "source": "ALOX12", "target": "NNMT" }},
									{"group":"edges", "data": { "id": "e296_1173", "source": "ALOX12", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e296_1278", "source": "ALOX12", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e297_727", "source": "CHSY3", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e332_346", "source": "TDO2", "target": "ADH7" }},
									{"group":"edges", "data": { "id": "e332_377", "source": "TDO2", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e332_477", "source": "TDO2", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e332_515", "source": "TDO2", "target": "CBR3" }},
									{"group":"edges", "data": { "id": "e332_684", "source": "TDO2", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e332_699", "source": "TDO2", "target": "CYP4F3" }},
									{"group":"edges", "data": { "id": "e332_727", "source": "TDO2", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e332_781", "source": "TDO2", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e332_830", "source": "TDO2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e332_857", "source": "TDO2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e332_1058", "source": "TDO2", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e332_1120", "source": "TDO2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e332_1278", "source": "TDO2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e332_1319", "source": "TDO2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e346_359", "source": "ADH7", "target": "VKORC1" }},
									{"group":"edges", "data": { "id": "e346_377", "source": "ADH7", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e346_426", "source": "ADH7", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e346_477", "source": "ADH7", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e346_561", "source": "ADH7", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e346_784", "source": "ADH7", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e346_827", "source": "ADH7", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e346_830", "source": "ADH7", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e346_839", "source": "ADH7", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e346_857", "source": "ADH7", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e346_1013", "source": "ADH7", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e346_1021", "source": "ADH7", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e346_1063", "source": "ADH7", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e346_1120", "source": "ADH7", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e346_1173", "source": "ADH7", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e346_1278", "source": "ADH7", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e346_1319", "source": "ADH7", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e359_377", "source": "VKORC1", "target": "CYP2C19" }},
									{"group":"edges", "data": { "id": "e359_426", "source": "VKORC1", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e359_441", "source": "VKORC1", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e359_477", "source": "VKORC1", "target": "UGT1A7" }},
									{"group":"edges", "data": { "id": "e359_577", "source": "VKORC1", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e359_707", "source": "VKORC1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e359_784", "source": "VKORC1", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e359_827", "source": "VKORC1", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e359_839", "source": "VKORC1", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e359_857", "source": "VKORC1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e359_915", "source": "VKORC1", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e359_1063", "source": "VKORC1", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e359_1081", "source": "VKORC1", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e359_1084", "source": "VKORC1", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e359_1089", "source": "VKORC1", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e359_1120", "source": "VKORC1", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e359_1278", "source": "VKORC1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e359_1319", "source": "VKORC1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e377_426", "source": "CYP2C19", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e377_561", "source": "CYP2C19", "target": "AMPD2" }},
									{"group":"edges", "data": { "id": "e377_661", "source": "CYP2C19", "target": "INPPL1" }},
									{"group":"edges", "data": { "id": "e377_707", "source": "CYP2C19", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e377_784", "source": "CYP2C19", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e377_827", "source": "CYP2C19", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e377_839", "source": "CYP2C19", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e377_855", "source": "CYP2C19", "target": "GPX7" }},
									{"group":"edges", "data": { "id": "e377_857", "source": "CYP2C19", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e377_915", "source": "CYP2C19", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e377_964", "source": "CYP2C19", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e377_1013", "source": "CYP2C19", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e377_1021", "source": "CYP2C19", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e377_1063", "source": "CYP2C19", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e377_1081", "source": "CYP2C19", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e377_1089", "source": "CYP2C19", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e377_1157", "source": "CYP2C19", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e377_1173", "source": "CYP2C19", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e377_1278", "source": "CYP2C19", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e377_1319", "source": "CYP2C19", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e377_1372", "source": "CYP2C19", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e393_426", "source": "MGLL", "target": "PLOD3" }},
									{"group":"edges", "data": { "id": "e393_857", "source": "MGLL", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e393_867", "source": "MGLL", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e393_915", "source": "MGLL", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e393_1013", "source": "MGLL", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e393_1021", "source": "MGLL", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e393_1063", "source": "MGLL", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e393_1084", "source": "MGLL", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e393_1278", "source": "MGLL", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e393_1319", "source": "MGLL", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e426_441", "source": "PLOD3", "target": "ATP6V1C2" }},
									{"group":"edges", "data": { "id": "e426_476", "source": "PLOD3", "target": "ALDH9A1" }},
									{"group":"edges", "data": { "id": "e426_484", "source": "PLOD3", "target": "GYS2" }},
									{"group":"edges", "data": { "id": "e426_577", "source": "PLOD3", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e426_614", "source": "PLOD3", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e426_684", "source": "PLOD3", "target": "GUCY2C" }},
									{"group":"edges", "data": { "id": "e426_695", "source": "PLOD3", "target": "ST6GALNAC1" }},
									{"group":"edges", "data": { "id": "e426_707", "source": "PLOD3", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e426_727", "source": "PLOD3", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e426_781", "source": "PLOD3", "target": "GPX3" }},
									{"group":"edges", "data": { "id": "e426_830", "source": "PLOD3", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e426_839", "source": "PLOD3", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e426_857", "source": "PLOD3", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e426_867", "source": "PLOD3", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e426_915", "source": "PLOD3", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e426_1063", "source": "PLOD3", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e426_1081", "source": "PLOD3", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e426_1084", "source": "PLOD3", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e426_1089", "source": "PLOD3", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e426_1278", "source": "PLOD3", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e426_1319", "source": "PLOD3", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e441_784", "source": "ATP6V1C2", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e441_839", "source": "ATP6V1C2", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e441_915", "source": "ATP6V1C2", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e441_1013", "source": "ATP6V1C2", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e441_1021", "source": "ATP6V1C2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e441_1081", "source": "ATP6V1C2", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e441_1089", "source": "ATP6V1C2", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e441_1170", "source": "ATP6V1C2", "target": "NNMT" }},
									{"group":"edges", "data": { "id": "e441_1278", "source": "ATP6V1C2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e441_1341", "source": "ATP6V1C2", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e450_461", "source": "P4HA3", "target": "PDE3A" }},
									{"group":"edges", "data": { "id": "e450_614", "source": "P4HA3", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e450_707", "source": "P4HA3", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e450_727", "source": "P4HA3", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e450_839", "source": "P4HA3", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e450_966", "source": "P4HA3", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e450_1008", "source": "P4HA3", "target": "DHCR24" }},
									{"group":"edges", "data": { "id": "e461_614", "source": "PDE3A", "target": "FUT2" }},
									{"group":"edges", "data": { "id": "e461_682", "source": "PDE3A", "target": "GGT5" }},
									{"group":"edges", "data": { "id": "e461_707", "source": "PDE3A", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e461_966", "source": "PDE3A", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e461_1008", "source": "PDE3A", "target": "DHCR24" }},
									{"group":"edges", "data": { "id": "e476_577", "source": "ALDH9A1", "target": "MGST2" }},
									{"group":"edges", "data": { "id": "e476_707", "source": "ALDH9A1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e476_867", "source": "ALDH9A1", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e476_1021", "source": "ALDH9A1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e476_1089", "source": "ALDH9A1", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e476_1319", "source": "ALDH9A1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e477_699", "source": "UGT1A7", "target": "CYP4F3" }},
									{"group":"edges", "data": { "id": "e477_784", "source": "UGT1A7", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e477_827", "source": "UGT1A7", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e477_1120", "source": "UGT1A7", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e477_1278", "source": "UGT1A7", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e484_964", "source": "GYS2", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e484_1013", "source": "GYS2", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e484_1021", "source": "GYS2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e484_1278", "source": "GYS2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e515_519", "source": "CBR3", "target": "GFPT2" }},
									{"group":"edges", "data": { "id": "e515_839", "source": "CBR3", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e519_727", "source": "GFPT2", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e519_827", "source": "GFPT2", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e519_830", "source": "GFPT2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e519_1120", "source": "GFPT2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e550_637", "source": "SGPP2", "target": "PDE4A" }},
									{"group":"edges", "data": { "id": "e550_784", "source": "SGPP2", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e561_707", "source": "AMPD2", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e561_827", "source": "AMPD2", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e561_830", "source": "AMPD2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e561_857", "source": "AMPD2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e561_1058", "source": "AMPD2", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e561_1173", "source": "AMPD2", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e561_1319", "source": "AMPD2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e561_1454", "source": "AMPD2", "target": "CHSY1" }},
									{"group":"edges", "data": { "id": "e577_707", "source": "MGST2", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e577_857", "source": "MGST2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e577_1013", "source": "MGST2", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e577_1021", "source": "MGST2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e577_1084", "source": "MGST2", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e577_1089", "source": "MGST2", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e577_1278", "source": "MGST2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e577_1319", "source": "MGST2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e614_682", "source": "FUT2", "target": "GGT5" }},
									{"group":"edges", "data": { "id": "e614_707", "source": "FUT2", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e614_784", "source": "FUT2", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e614_839", "source": "FUT2", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e614_855", "source": "FUT2", "target": "GPX7" }},
									{"group":"edges", "data": { "id": "e614_964", "source": "FUT2", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e614_966", "source": "FUT2", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e614_1021", "source": "FUT2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e614_1089", "source": "FUT2", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e614_1372", "source": "FUT2", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e636_707", "source": "BLVRB", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e636_857", "source": "BLVRB", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e636_1013", "source": "BLVRB", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e636_1021", "source": "BLVRB", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e637_1134", "source": "PDE4A", "target": "GSTA4" }},
									{"group":"edges", "data": { "id": "e637_1436", "source": "PDE4A", "target": "AKR1B10" }},
									{"group":"edges", "data": { "id": "e661_707", "source": "INPPL1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e661_827", "source": "INPPL1", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e661_839", "source": "INPPL1", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e661_915", "source": "INPPL1", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e661_966", "source": "INPPL1", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e661_1081", "source": "INPPL1", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e661_1089", "source": "INPPL1", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e661_1134", "source": "INPPL1", "target": "GSTA4" }},
									{"group":"edges", "data": { "id": "e661_1278", "source": "INPPL1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e661_1315", "source": "INPPL1", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e682_714", "source": "GGT5", "target": "CDS1" }},
									{"group":"edges", "data": { "id": "e682_784", "source": "GGT5", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e682_964", "source": "GGT5", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e682_1028", "source": "GGT5", "target": "ENPP2" }},
									{"group":"edges", "data": { "id": "e682_1170", "source": "GGT5", "target": "NNMT" }},
									{"group":"edges", "data": { "id": "e682_1282", "source": "GGT5", "target": "MBOAT2" }},
									{"group":"edges", "data": { "id": "e684_915", "source": "GUCY2C", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e684_1013", "source": "GUCY2C", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e684_1021", "source": "GUCY2C", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e684_1278", "source": "GUCY2C", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e695_707", "source": "ST6GALNAC1", "target": "FUT3" }},
									{"group":"edges", "data": { "id": "e695_857", "source": "ST6GALNAC1", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e695_1013", "source": "ST6GALNAC1", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e695_1021", "source": "ST6GALNAC1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e695_1278", "source": "ST6GALNAC1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e699_784", "source": "CYP4F3", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e699_827", "source": "CYP4F3", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e699_839", "source": "CYP4F3", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e699_1173", "source": "CYP4F3", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e699_1278", "source": "CYP4F3", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e707_727", "source": "FUT3", "target": "GGT6" }},
									{"group":"edges", "data": { "id": "e707_784", "source": "FUT3", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e707_827", "source": "FUT3", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e707_839", "source": "FUT3", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e707_855", "source": "FUT3", "target": "GPX7" }},
									{"group":"edges", "data": { "id": "e707_857", "source": "FUT3", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e707_867", "source": "FUT3", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e707_915", "source": "FUT3", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e707_964", "source": "FUT3", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e707_966", "source": "FUT3", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e707_1013", "source": "FUT3", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e707_1021", "source": "FUT3", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e707_1058", "source": "FUT3", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e707_1081", "source": "FUT3", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e707_1084", "source": "FUT3", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e707_1089", "source": "FUT3", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e707_1278", "source": "FUT3", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e707_1315", "source": "FUT3", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e707_1319", "source": "FUT3", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e707_1372", "source": "FUT3", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e714_964", "source": "CDS1", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e714_1238", "source": "CDS1", "target": "PDE1B" }},
									{"group":"edges", "data": { "id": "e714_1282", "source": "CDS1", "target": "MBOAT2" }},
									{"group":"edges", "data": { "id": "e727_784", "source": "GGT6", "target": "GUCY1A2" }},
									{"group":"edges", "data": { "id": "e727_839", "source": "GGT6", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e727_867", "source": "GGT6", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e727_915", "source": "GGT6", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e727_964", "source": "GGT6", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e727_1013", "source": "GGT6", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e727_1021", "source": "GGT6", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e727_1039", "source": "GGT6", "target": "FUT8" }},
									{"group":"edges", "data": { "id": "e727_1081", "source": "GGT6", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e727_1157", "source": "GGT6", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e727_1278", "source": "GGT6", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e727_1454", "source": "GGT6", "target": "CHSY1" }},
									{"group":"edges", "data": { "id": "e781_1013", "source": "GPX3", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e781_1278", "source": "GPX3", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e784_827", "source": "GUCY1A2", "target": "GALNT10" }},
									{"group":"edges", "data": { "id": "e784_830", "source": "GUCY1A2", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e784_839", "source": "GUCY1A2", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e784_857", "source": "GUCY1A2", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e784_1008", "source": "GUCY1A2", "target": "DHCR24" }},
									{"group":"edges", "data": { "id": "e784_1063", "source": "GUCY1A2", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e784_1084", "source": "GUCY1A2", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e784_1120", "source": "GUCY1A2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e784_1319", "source": "GUCY1A2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e827_830", "source": "GALNT10", "target": "ALDH3A2" }},
									{"group":"edges", "data": { "id": "e827_839", "source": "GALNT10", "target": "GPX8" }},
									{"group":"edges", "data": { "id": "e827_857", "source": "GALNT10", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e827_1021", "source": "GALNT10", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e827_1058", "source": "GALNT10", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e827_1063", "source": "GALNT10", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e827_1081", "source": "GALNT10", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e827_1120", "source": "GALNT10", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e827_1134", "source": "GALNT10", "target": "GSTA4" }},
									{"group":"edges", "data": { "id": "e827_1151", "source": "GALNT10", "target": "ME1" }},
									{"group":"edges", "data": { "id": "e827_1278", "source": "GALNT10", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e827_1319", "source": "GALNT10", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e830_964", "source": "ALDH3A2", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e830_1021", "source": "ALDH3A2", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e830_1120", "source": "ALDH3A2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e830_1157", "source": "ALDH3A2", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e830_1173", "source": "ALDH3A2", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e830_1278", "source": "ALDH3A2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e839_855", "source": "GPX8", "target": "GPX7" }},
									{"group":"edges", "data": { "id": "e839_857", "source": "GPX8", "target": "FUT6" }},
									{"group":"edges", "data": { "id": "e839_867", "source": "GPX8", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e839_915", "source": "GPX8", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e839_966", "source": "GPX8", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e839_1013", "source": "GPX8", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e839_1021", "source": "GPX8", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e839_1039", "source": "GPX8", "target": "FUT8" }},
									{"group":"edges", "data": { "id": "e839_1063", "source": "GPX8", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e839_1081", "source": "GPX8", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e839_1084", "source": "GPX8", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e839_1120", "source": "GPX8", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e839_1278", "source": "GPX8", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e839_1319", "source": "GPX8", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e855_964", "source": "GPX7", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e855_966", "source": "GPX7", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e855_1039", "source": "GPX7", "target": "FUT8" }},
									{"group":"edges", "data": { "id": "e855_1081", "source": "GPX7", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e855_1282", "source": "GPX7", "target": "MBOAT2" }},
									{"group":"edges", "data": { "id": "e857_867", "source": "FUT6", "target": "GDPD3" }},
									{"group":"edges", "data": { "id": "e857_915", "source": "FUT6", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e857_964", "source": "FUT6", "target": "ARSB" }},
									{"group":"edges", "data": { "id": "e857_1013", "source": "FUT6", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e857_1021", "source": "FUT6", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e857_1058", "source": "FUT6", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e857_1063", "source": "FUT6", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e857_1081", "source": "FUT6", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e857_1084", "source": "FUT6", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e857_1089", "source": "FUT6", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e857_1278", "source": "FUT6", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e857_1319", "source": "FUT6", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e867_915", "source": "GDPD3", "target": "GANAB" }},
									{"group":"edges", "data": { "id": "e867_966", "source": "GDPD3", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e867_1013", "source": "GDPD3", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e867_1021", "source": "GDPD3", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e867_1278", "source": "GDPD3", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e915_1013", "source": "GANAB", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e915_1021", "source": "GANAB", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e915_1063", "source": "GANAB", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e915_1081", "source": "GANAB", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e915_1089", "source": "GANAB", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e915_1278", "source": "GANAB", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e915_1319", "source": "GANAB", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e964_966", "source": "ARSB", "target": "SULT2B1" }},
									{"group":"edges", "data": { "id": "e964_1063", "source": "ARSB", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e964_1081", "source": "ARSB", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e964_1084", "source": "ARSB", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e964_1120", "source": "ARSB", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e964_1372", "source": "ARSB", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e966_1013", "source": "SULT2B1", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e966_1021", "source": "SULT2B1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e966_1039", "source": "SULT2B1", "target": "FUT8" }},
									{"group":"edges", "data": { "id": "e966_1081", "source": "SULT2B1", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e1013_1021", "source": "ATP6V1C1", "target": "CSGALNACT2" }},
									{"group":"edges", "data": { "id": "e1013_1058", "source": "ATP6V1C1", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e1013_1063", "source": "ATP6V1C1", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e1013_1084", "source": "ATP6V1C1", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e1013_1120", "source": "ATP6V1C1", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e1013_1278", "source": "ATP6V1C1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1013_1297", "source": "ATP6V1C1", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e1013_1319", "source": "ATP6V1C1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1013_1341", "source": "ATP6V1C1", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e1021_1058", "source": "CSGALNACT2", "target": "GPT2" }},
									{"group":"edges", "data": { "id": "e1021_1063", "source": "CSGALNACT2", "target": "CYP2C9" }},
									{"group":"edges", "data": { "id": "e1021_1081", "source": "CSGALNACT2", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e1021_1084", "source": "CSGALNACT2", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e1021_1120", "source": "CSGALNACT2", "target": "ALDH3A1" }},
									{"group":"edges", "data": { "id": "e1021_1278", "source": "CSGALNACT2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1021_1319", "source": "CSGALNACT2", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1021_1341", "source": "CSGALNACT2", "target": "DEGS2" }},
									{"group":"edges", "data": { "id": "e1028_1238", "source": "ENPP2", "target": "PDE1B" }},
									{"group":"edges", "data": { "id": "e1039_1081", "source": "FUT8", "target": "HEXA" }},
									{"group":"edges", "data": { "id": "e1058_1278", "source": "GPT2", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1063_1157", "source": "CYP2C9", "target": "DGKZ" }},
									{"group":"edges", "data": { "id": "e1063_1173", "source": "CYP2C9", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e1063_1278", "source": "CYP2C9", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1063_1319", "source": "CYP2C9", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1081_1084", "source": "HEXA", "target": "ATP6V0A4" }},
									{"group":"edges", "data": { "id": "e1081_1089", "source": "HEXA", "target": "PIGT" }},
									{"group":"edges", "data": { "id": "e1081_1278", "source": "HEXA", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1081_1315", "source": "HEXA", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e1081_1319", "source": "HEXA", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1081_1454", "source": "HEXA", "target": "CHSY1" }},
									{"group":"edges", "data": { "id": "e1084_1278", "source": "ATP6V0A4", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1084_1319", "source": "ATP6V0A4", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1084_1372", "source": "ATP6V0A4", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e1089_1278", "source": "PIGT", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1089_1319", "source": "PIGT", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1120_1278", "source": "ALDH3A1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1134_1151", "source": "GSTA4", "target": "ME1" }},
									{"group":"edges", "data": { "id": "e1134_1173", "source": "GSTA4", "target": "SPHK1" }},
									{"group":"edges", "data": { "id": "e1134_1315", "source": "GSTA4", "target": "PLD3" }},
									{"group":"edges", "data": { "id": "e1157_1372", "source": "DGKZ", "target": "ST3GAL2" }},
									{"group":"edges", "data": { "id": "e1170_1454", "source": "NNMT", "target": "CHSY1" }},
									{"group":"edges", "data": { "id": "e1173_1278", "source": "SPHK1", "target": "PLOD1" }},
									{"group":"edges", "data": { "id": "e1173_1297", "source": "SPHK1", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e1173_1319", "source": "SPHK1", "target": "CYP3A5" }},
									{"group":"edges", "data": { "id": "e1278_1297", "source": "PLOD1", "target": "ACADSB" }},
									{"group":"edges", "data": { "id": "e1278_1319", "source": "PLOD1", "target": "CYP3A5" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Biosynthesis_of_amino_acids: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "GPT2","shape": "ellipse","color":"#FF9797"}}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				MAPK_signaling_pathway: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "MEF2C","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "IGF1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GNA12","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CACNA1H","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ARRB2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MRAS","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CSF1R","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TAOK2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TGFB3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FLNA","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MAP3K3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HGF","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ELK1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CACNA1C","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "IL1R1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRA","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TGFBR1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TGFBR2","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e10_84", "source": "MEF2C", "target": "MRAS" }},
									{"group":"edges", "data": { "id": "e16_136", "source": "IGF1", "target": "FGF7" }},
									{"group":"edges", "data": { "id": "e16_174", "source": "IGF1", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e16_256", "source": "IGF1", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e18_145", "source": "GNA12", "target": "FLNA" }},
									{"group":"edges", "data": { "id": "e18_190", "source": "GNA12", "target": "ELK1" }},
									{"group":"edges", "data": { "id": "e51_99", "source": "ARRB2", "target": "CSF1R" }},
									{"group":"edges", "data": { "id": "e99_173", "source": "CSF1R", "target": "MAP3K3" }},
									{"group":"edges", "data": { "id": "e105_209", "source": "PDGFRB", "target": "CACNA1C" }},
									{"group":"edges", "data": { "id": "e136_174", "source": "FGF7", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e136_256", "source": "FGF7", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e145_190", "source": "FLNA", "target": "ELK1" }},
									{"group":"edges", "data": { "id": "e174_256", "source": "HGF", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e209_256", "source": "CACNA1C", "target": "PDGFRA" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Ras_signaling_pathway: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "GNB1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "IGF1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ETS1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MRAS","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CSF1R","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CALML3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SHC1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GNG2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HGF","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ELK1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "RASA3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRA","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e4_25", "source": "GNB1", "target": "ETS1" }},
									{"group":"edges", "data": { "id": "e4_131", "source": "GNB1", "target": "SHC1" }},
									{"group":"edges", "data": { "id": "e4_156", "source": "GNB1", "target": "ELK1" }},
									{"group":"edges", "data": { "id": "e13_117", "source": "IGF1", "target": "FGF7" }},
									{"group":"edges", "data": { "id": "e13_144", "source": "IGF1", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e13_210", "source": "IGF1", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e94_175", "source": "CALML3", "target": "RASA3" }},
									{"group":"edges", "data": { "id": "e117_144", "source": "FGF7", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e117_210", "source": "FGF7", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e144_210", "source": "HGF", "target": "PDGFRA" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Rap1_signaling_pathway: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "BCAR1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "IGF1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SIPA1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "F2R","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CDH1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MRAS","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CSF1R","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRB","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "LPAR1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "CALML3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF7","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TLN1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "GNAI2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "P2RY1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HGF","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "RAPGEF1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SIPA1L2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "MAGI1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "VAV2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PDGFRA","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e1_122", "source": "BCAR1", "target": "P2RY1" }},
									{"group":"edges", "data": { "id": "e1_180", "source": "BCAR1", "target": "MAGI1" }},
									{"group":"edges", "data": { "id": "e1_183", "source": "BCAR1", "target": "VAV2" }},
									{"group":"edges", "data": { "id": "e7_52", "source": "IGF1", "target": "CDH1" }},
									{"group":"edges", "data": { "id": "e7_103", "source": "IGF1", "target": "FGF7" }},
									{"group":"edges", "data": { "id": "e7_131", "source": "IGF1", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e7_187", "source": "IGF1", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e11_67", "source": "SIPA1", "target": "CSF1R" }},
									{"group":"edges", "data": { "id": "e11_119", "source": "SIPA1", "target": "GNAI2" }},
									{"group":"edges", "data": { "id": "e67_119", "source": "CSF1R", "target": "GNAI2" }},
									{"group":"edges", "data": { "id": "e71_157", "source": "PDGFRB", "target": "RAPGEF1" }},
									{"group":"edges", "data": { "id": "e82_103", "source": "LPAR1", "target": "FGF7" }},
									{"group":"edges", "data": { "id": "e82_131", "source": "LPAR1", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e103_131", "source": "FGF7", "target": "HGF" }},
									{"group":"edges", "data": { "id": "e103_187", "source": "FGF7", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e117_122", "source": "TLN1", "target": "P2RY1" }},
									{"group":"edges", "data": { "id": "e117_157", "source": "TLN1", "target": "RAPGEF1" }},
									{"group":"edges", "data": { "id": "e117_180", "source": "TLN1", "target": "MAGI1" }},
									{"group":"edges", "data": { "id": "e117_183", "source": "TLN1", "target": "VAV2" }},
									{"group":"edges", "data": { "id": "e122_157", "source": "P2RY1", "target": "RAPGEF1" }},
									{"group":"edges", "data": { "id": "e122_183", "source": "P2RY1", "target": "VAV2" }},
									{"group":"edges", "data": { "id": "e131_187", "source": "HGF", "target": "PDGFRA" }},
									{"group":"edges", "data": { "id": "e180_183", "source": "MAGI1", "target": "VAV2" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Neuroactive_ligand_receptor_interaction: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "NMU","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "LPAR1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PTGDR","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ADRA2A","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "S1PR2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "F2R","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "S1PR3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "EDNRA","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TACR2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "P2RY2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "P2RY1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "S1PR1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HRH2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SLURP1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PTGER2","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e20_198", "source": "NMU", "target": "F2R" }},
									{"group":"edges", "data": { "id": "e20_220", "source": "NMU", "target": "S1PR3" }},
									{"group":"edges", "data": { "id": "e20_279", "source": "NMU", "target": "P2RY2" }},
									{"group":"edges", "data": { "id": "e64_312", "source": "PTGDR", "target": "P2RY1" }},
									{"group":"edges", "data": { "id": "e81_315", "source": "ADRA2A", "target": "S1PR1" }},
									{"group":"edges", "data": { "id": "e124_220", "source": "S1PR2", "target": "S1PR3" }},
									{"group":"edges", "data": { "id": "e124_312", "source": "S1PR2", "target": "P2RY1" }},
									{"group":"edges", "data": { "id": "e198_279", "source": "F2R", "target": "P2RY2" }},
									{"group":"edges", "data": { "id": "e198_321", "source": "F2R", "target": "SLURP1" }},
									{"group":"edges", "data": { "id": "e220_312", "source": "S1PR3", "target": "P2RY1" }},
									{"group":"edges", "data": { "id": "e319_337", "source": "HRH2", "target": "PTGER2" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				},
				Vibrio_cholerae_infection: function () {
					if (cyto_scene) {
						cyto_scene = document.getElementById('cyto_scene');
						cyto_scene.removeChild(cyto_scene.firstElementChild);
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}else{
						cyto_scene = document.getElementById('cyto_scene');
						var elem = document.createElement("div");
						elem.id = 'cy';
						cyto_scene.appendChild(elem);
					}

					cy = $(elem).cytoscape({
							pan: {
								x: 600,
								y: 400
								},
							boxSelectionEnabled: false,
							autounselectify: false,
							panningEnabled: true,
							zoom: 1,
							minZoom: 0.25,
							maxZoom: 2.5,
							wheelSensitivity: 0.4,
							elements: [
									{"group":"nodes", "data": { "id": "KDELR3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V0A4","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "TJP1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C1","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "SEC61A1","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e10_26", "source": "ATP6V1C2", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e10_48", "source": "ATP6V1C2", "target": "SEC61A1" }},
									{"group":"edges", "data": { "id": "e18_26", "source": "ATP6V0A4", "target": "ATP6V1C1" }},
									{"group":"edges", "data": { "id": "e18_48", "source": "ATP6V0A4", "target": "SEC61A1" }},
									{"group":"edges", "data": { "id": "e26_48", "source": "ATP6V1C1", "target": "SEC61A1" }}]
						,
						style: [{
							selector: 'node',
							style: {
								'background-color': 'data(color)',
								'label': 'data(id)',
								'shape': 'data(shape)',
								'width': 50,
								'height': 50,
								"text-wrap": "wrap",
								"text-max-width": 70,
								"text-valign": "center",
								"font-size": "12px"
							}
						},
						{
							selector: 'edge',
							style: {
								'width': 3,
								'line-color': '#ccc',
								'target-arrow-color': '#ccc'
							}
						}
						],
						layout: {
							name: 'concentric',
							fit: true,
							minNodeSpacing: 20,
							concentric: function(node) {
								return node.degree();
							},
							levelWidth: function(nodes) {
								return 2;
							}
						}
					}).cytoscape('get');
					cy.panzoom({});
				}
			}
		};
		var network = new CanvasApp();