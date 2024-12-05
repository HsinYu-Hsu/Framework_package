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
									{"group":"nodes", "data": { "id": "SHMT2","shape": "ellipse","color":"#FF9797"}},
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "SHMT2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C2","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "PI4K2B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HEXA","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e441_1081", "source": "ATP6V1C2", "target": "HEXA" }},
,
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "SHMT2","shape": "ellipse","color":"#FF9797"}},
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "RAP1B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF10","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e38_87", "source": "RAP1B", "target": "FGF10" }},
,
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "RAP1B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF10","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e23_65", "source": "RAP1B", "target": "FGF10" }},
,
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "RAP1B","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "FGF10","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e25_60", "source": "RAP1B", "target": "FGF10" }},
,
]
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
								'width': 'data(width)',
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
				Neuroactive_ligand-receptor_interaction: function () {
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
									{"group":"nodes", "data": { "id": "FPR3","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "HRH2","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e63_319", "source": "FPR3", "target": "HRH2" }},
,
]
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
								'width': 'data(width)',
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
									{"group":"nodes", "data": { "id": "PDIA4","shape": "ellipse","color":"#FF9797"}},
									{"group":"nodes", "data": { "id": "ATP6V1C2","shape": "ellipse","color":"#FF9797"}},
									{"group":"edges", "data": { "id": "e1_10", "source": "PDIA4", "target": "ATP6V1C2" }},
,
]
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
								'width': 'data(width)',
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