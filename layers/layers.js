ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([585983.149087, 9614344.510214, 589291.104224, 9615899.632745]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parcelas_1 = new ol.format.GeoJSON();
var features_parcelas_1 = format_parcelas_1.readFeatures(json_parcelas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_parcelas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_1.addFeatures(features_parcelas_1);
var lyr_parcelas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_1, 
                style: style_parcelas_1,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_1_0.png" /> RESIDENCIA<br />\
    <img src="styles/legend/parcelas_1_1.png" /> SUELO VACANTE<br />\
    <img src="styles/legend/parcelas_1_2.png" /> COMERCIAL<br />' });
var format_lotes_urbanos_2 = new ol.format.GeoJSON();
var features_lotes_urbanos_2 = format_lotes_urbanos_2.readFeatures(json_lotes_urbanos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_lotes_urbanos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_2.addFeatures(features_lotes_urbanos_2);
var lyr_lotes_urbanos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_2, 
                style: style_lotes_urbanos_2,
                popuplayertitle: ' lotes_urbanos',
                interactive: true,
    title: ' lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_2_0.png" /> 16 de Julio<br />\
    <img src="styles/legend/lotes_urbanos_2_1.png" /> Union Lojana<br />\
    <img src="styles/legend/lotes_urbanos_2_2.png" /> Jaime Roldos<br />' });
var format_red_vial_3 = new ol.format.GeoJSON();
var features_red_vial_3 = format_red_vial_3.readFeatures(json_red_vial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_red_vial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_3.addFeatures(features_red_vial_3);
var lyr_red_vial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_3, 
                style: style_red_vial_3,
                popuplayertitle: 'red_vial.',
                interactive: true,
    title: 'red_vial.<br />\
    <img src="styles/legend/red_vial_3_0.png" /> arterial<br />\
    <img src="styles/legend/red_vial_3_1.png" /> colectora<br />\
    <img src="styles/legend/red_vial_3_2.png" /> local<br />' });
var format_hidrografia_4 = new ol.format.GeoJSON();
var features_hidrografia_4 = format_hidrografia_4.readFeatures(json_hidrografia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_hidrografia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_4.addFeatures(features_hidrografia_4);
var lyr_hidrografia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_4, 
                style: style_hidrografia_4,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_4.png" /> hidrografia'
            });
var format_EQUIPAMIENTO_5 = new ol.format.GeoJSON();
var features_EQUIPAMIENTO_5 = format_EQUIPAMIENTO_5.readFeatures(json_EQUIPAMIENTO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_EQUIPAMIENTO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMIENTO_5.addFeatures(features_EQUIPAMIENTO_5);
var lyr_EQUIPAMIENTO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMIENTO_5, 
                style: style_EQUIPAMIENTO_5,
                popuplayertitle: 'EQUIPAMIENTO',
                interactive: true,
    title: 'EQUIPAMIENTO<br />\
    <img src="styles/legend/EQUIPAMIENTO_5_0.png" /> EDUCACION<br />\
    <img src="styles/legend/EQUIPAMIENTO_5_1.png" /> SALUD<br />' });
var format_equipamientos_6 = new ol.format.GeoJSON();
var features_equipamientos_6 = format_equipamientos_6.readFeatures(json_equipamientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_equipamientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_6.addFeatures(features_equipamientos_6);
var lyr_equipamientos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_6, 
                style: style_equipamientos_6,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_6_0.png" /> Educacion<br />\
    <img src="styles/legend/equipamientos_6_1.png" /> Salud<br />' });
var format_areas_verdes_7 = new ol.format.GeoJSON();
var features_areas_verdes_7 = format_areas_verdes_7.readFeatures(json_areas_verdes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_areas_verdes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_7.addFeatures(features_areas_verdes_7);
var lyr_areas_verdes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_7, 
                style: style_areas_verdes_7,
                popuplayertitle: 'areas_verdes',
                interactive: true,
                title: '<img src="styles/legend/areas_verdes_7.png" /> areas_verdes'
            });
var format_Buffer_Educacion_300m_8 = new ol.format.GeoJSON();
var features_Buffer_Educacion_300m_8 = format_Buffer_Educacion_300m_8.readFeatures(json_Buffer_Educacion_300m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Buffer_Educacion_300m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Educacion_300m_8.addFeatures(features_Buffer_Educacion_300m_8);
var lyr_Buffer_Educacion_300m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Educacion_300m_8, 
                style: style_Buffer_Educacion_300m_8,
                popuplayertitle: 'Buffer_Educacion_300m',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Educacion_300m_8.png" /> Buffer_Educacion_300m'
            });
var format_Buffer_Salud_600m_9 = new ol.format.GeoJSON();
var features_Buffer_Salud_600m_9 = format_Buffer_Salud_600m_9.readFeatures(json_Buffer_Salud_600m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Buffer_Salud_600m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Salud_600m_9.addFeatures(features_Buffer_Salud_600m_9);
var lyr_Buffer_Salud_600m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Salud_600m_9, 
                style: style_Buffer_Salud_600m_9,
                popuplayertitle: 'Buffer_Salud_600m',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Salud_600m_9.png" /> Buffer_Salud_600m'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_parcelas_1.setVisible(true);lyr_lotes_urbanos_2.setVisible(true);lyr_red_vial_3.setVisible(true);lyr_hidrografia_4.setVisible(true);lyr_EQUIPAMIENTO_5.setVisible(true);lyr_equipamientos_6.setVisible(true);lyr_areas_verdes_7.setVisible(true);lyr_Buffer_Educacion_300m_8.setVisible(true);lyr_Buffer_Salud_600m_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_parcelas_1,lyr_lotes_urbanos_2,lyr_red_vial_3,lyr_hidrografia_4,lyr_EQUIPAMIENTO_5,lyr_equipamientos_6,lyr_areas_verdes_7,lyr_Buffer_Educacion_300m_8,lyr_Buffer_Salud_600m_9];
lyr_parcelas_1.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_lotes_urbanos_2.set('fieldAliases', {'fid': 'fid', 'id_lote ': 'id_lote ', 'nombre': 'nombre', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2': 'area_m2', });
lyr_red_vial_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', 'sentido': 'sentido', });
lyr_hidrografia_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', 'caudal_m3s': 'caudal_m3s', });
lyr_EQUIPAMIENTO_5.set('fieldAliases', {'fid': 'fid', 'TIPO': 'TIPO', });
lyr_equipamientos_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'sutipo': 'sutipo', 'capacidad': 'capacidad', });
lyr_areas_verdes_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', 'estado': 'estado', });
lyr_Buffer_Educacion_300m_8.set('fieldAliases', {'fid': 'fid', });
lyr_Buffer_Salud_600m_9.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', });
lyr_parcelas_1.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_lotes_urbanos_2.set('fieldImages', {'fid': 'TextEdit', 'id_lote ': 'TextEdit', 'nombre': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_red_vial_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', 'sentido': 'TextEdit', });
lyr_hidrografia_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', 'caudal_m3s': 'TextEdit', });
lyr_EQUIPAMIENTO_5.set('fieldImages', {'fid': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_equipamientos_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'sutipo': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_areas_verdes_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', 'estado': 'TextEdit', });
lyr_Buffer_Educacion_300m_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_Buffer_Salud_600m_9.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_parcelas_1.set('fieldLabels', {'fid': 'hidden field', 'cod_predio': 'inline label - always visible', 'uso_suelo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_lotes_urbanos_2.set('fieldLabels', {'fid': 'hidden field', 'id_lote ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'manzana': 'inline label - always visible', 'uso': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', 'area_m2': 'inline label - always visible', });
lyr_red_vial_3.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo_via': 'inline label - always visible', 'ancho_m': 'inline label - always visible', 'sentido': 'inline label - always visible', });
lyr_hidrografia_4.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', 'caudal_m3s': 'inline label - always visible', });
lyr_EQUIPAMIENTO_5.set('fieldLabels', {'fid': 'hidden field', 'TIPO': 'inline label - always visible', });
lyr_equipamientos_6.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'sutipo': 'inline label - always visible', 'capacidad': 'inline label - always visible', });
lyr_areas_verdes_7.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'estado': 'inline label - always visible', });
lyr_Buffer_Educacion_300m_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_Buffer_Salud_600m_9.set('fieldLabels', {'fid': 'hidden field', 'Tipo': 'inline label - always visible', });
lyr_Buffer_Salud_600m_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});