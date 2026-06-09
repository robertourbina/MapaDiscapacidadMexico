var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Entidades_1 = new ol.format.GeoJSON();
var features_Entidades_1 = format_Entidades_1.readFeatures(json_Entidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entidades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entidades_1.addFeatures(features_Entidades_1);
var lyr_Entidades_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entidades_1, 
                style: style_Entidades_1,
                popuplayertitle: 'Entidades',
                interactive: false,
    title: 'Entidades<br />\
    <img src="styles/legend/Entidades_1_0.png" /> AGUASCALIENTES<br />\
    <img src="styles/legend/Entidades_1_1.png" /> BAJA CALIFORNIA<br />\
    <img src="styles/legend/Entidades_1_2.png" /> BAJA CALIFORNIA SUR<br />\
    <img src="styles/legend/Entidades_1_3.png" /> CAMPECHE<br />\
    <img src="styles/legend/Entidades_1_4.png" /> CHIAPAS<br />\
    <img src="styles/legend/Entidades_1_5.png" /> CHIHUAHUA<br />\
    <img src="styles/legend/Entidades_1_6.png" /> COAHUILA DE ZARAGOZA<br />\
    <img src="styles/legend/Entidades_1_7.png" /> COLIMA<br />\
    <img src="styles/legend/Entidades_1_8.png" /> DISTRITO FEDERAL<br />\
    <img src="styles/legend/Entidades_1_9.png" /> DURANGO<br />\
    <img src="styles/legend/Entidades_1_10.png" /> GUANAJUATO<br />\
    <img src="styles/legend/Entidades_1_11.png" /> GUERRERO<br />\
    <img src="styles/legend/Entidades_1_12.png" /> HIDALGO<br />\
    <img src="styles/legend/Entidades_1_13.png" /> JALISCO<br />\
    <img src="styles/legend/Entidades_1_14.png" /> MEXICO<br />\
    <img src="styles/legend/Entidades_1_15.png" /> MICHOACAN DE OCAMPO<br />\
    <img src="styles/legend/Entidades_1_16.png" /> MORELOS<br />\
    <img src="styles/legend/Entidades_1_17.png" /> NAYARIT<br />\
    <img src="styles/legend/Entidades_1_18.png" /> NUEVO LEON<br />\
    <img src="styles/legend/Entidades_1_19.png" /> OAXACA<br />\
    <img src="styles/legend/Entidades_1_20.png" /> PUEBLA<br />\
    <img src="styles/legend/Entidades_1_21.png" /> QUERETARO DE ARTEAGA<br />\
    <img src="styles/legend/Entidades_1_22.png" /> QUINTANA ROO<br />\
    <img src="styles/legend/Entidades_1_23.png" /> SAN LUIS POTOSI<br />\
    <img src="styles/legend/Entidades_1_24.png" /> SINALOA<br />\
    <img src="styles/legend/Entidades_1_25.png" /> SONORA<br />\
    <img src="styles/legend/Entidades_1_26.png" /> TABASCO<br />\
    <img src="styles/legend/Entidades_1_27.png" /> TAMAULIPAS<br />\
    <img src="styles/legend/Entidades_1_28.png" /> TLAXCALA<br />\
    <img src="styles/legend/Entidades_1_29.png" /> VERACRUZ DE IGNACIO DE LA LLAVE<br />\
    <img src="styles/legend/Entidades_1_30.png" /> YUCATAN<br />\
    <img src="styles/legend/Entidades_1_31.png" /> ZACATECAS<br />\
    <img src="styles/legend/Entidades_1_32.png" /> <br />' });
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var format_Guanajuato_3 = new ol.format.GeoJSON();
var features_Guanajuato_3 = format_Guanajuato_3.readFeatures(json_Guanajuato_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guanajuato_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guanajuato_3.addFeatures(features_Guanajuato_3);
var lyr_Guanajuato_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guanajuato_3, 
                style: style_Guanajuato_3,
                popuplayertitle: 'Guanajuato',
                interactive: false,
                title: '<img src="styles/legend/Guanajuato_3.png" /> Guanajuato'
            });
var format_InstitucionesGuanajuato_4 = new ol.format.GeoJSON();
var features_InstitucionesGuanajuato_4 = format_InstitucionesGuanajuato_4.readFeatures(json_InstitucionesGuanajuato_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionesGuanajuato_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionesGuanajuato_4.addFeatures(features_InstitucionesGuanajuato_4);
var lyr_InstitucionesGuanajuato_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionesGuanajuato_4, 
                style: style_InstitucionesGuanajuato_4,
                popuplayertitle: 'Instituciones Guanajuato',
                interactive: true,
    title: 'Instituciones Guanajuato<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_0.png" /> Centro De Rehabilitacion<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_1.png" /> Centro De Rehabilitacion Dif Dolores Hidalgo Guanajuato<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_2.png" /> Centro De Rehabilitacion E Inclusion Infantil Teleton Guanajuato<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_3.png" /> Centro De Rehabilitacion Integral De San Miguel De Allende<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_4.png" /> Centro De Rehabilitacion Ludovicense<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_5.png" /> Centro De Rehabilitacion Visual<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_6.png" /> Centro Especializado De Estimulacion Multiple<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_7.png" /> Centro Integral Para Las Personas Con Discapacidad Visual<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_8.png" /> Dif Municipal<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_9.png" /> Escuela De Atencion Educativa Para Personas Con Discapacidad Visual E Intelectual Motora<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_10.png" /> Fundacion De Rehabilitacion Infantil Teleton<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_11.png" /> Rehabilitacion<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_12.png" /> Rehabilitacion Dif Municipal<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_13.png" /> Smdf<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_14.png" /> Unidad Basica De Rehabilitacion Dif<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_15.png" /> Unidad De Rehabilitacion<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_16.png" /> Unidad Municipal De Rehabilitacion Jerecuaro<br />\
    <img src="styles/legend/InstitucionesGuanajuato_4_17.png" /> <br />' });
var format_Queretaro_5 = new ol.format.GeoJSON();
var features_Queretaro_5 = format_Queretaro_5.readFeatures(json_Queretaro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Queretaro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Queretaro_5.addFeatures(features_Queretaro_5);
var lyr_Queretaro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Queretaro_5, 
                style: style_Queretaro_5,
                popuplayertitle: 'Queretaro',
                interactive: false,
                title: '<img src="styles/legend/Queretaro_5.png" /> Queretaro'
            });
var format_InstitucionesQueretaro_6 = new ol.format.GeoJSON();
var features_InstitucionesQueretaro_6 = format_InstitucionesQueretaro_6.readFeatures(json_InstitucionesQueretaro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InstitucionesQueretaro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstitucionesQueretaro_6.addFeatures(features_InstitucionesQueretaro_6);
var lyr_InstitucionesQueretaro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstitucionesQueretaro_6, 
                style: style_InstitucionesQueretaro_6,
                popuplayertitle: 'Instituciones Queretaro',
                interactive: true,
    title: 'Instituciones Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_0.png" /> Asociacion Pro Personas Con Paralisis Cerebral Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_1.png" /> Calli A.C. Centro de apoyo y calidad de vida<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_2.png" /> Casa Hogar Maximiliano Maria Kolbe<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_3.png" /> Centro de capacitaciòn laboral She Shi A. C.<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_4.png" /> Centro De Rehabilitacion Integral Sjr<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_5.png" /> Centro Regional De Desarrollo Infantil Y Estimulacion Temprana<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_6.png" /> Coordinacion De Accesibilidad E Inclusion A Personas Con Discapacidad<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_7.png" /> Effeta Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_8.png" /> El arca de Queretaro I. A.P. (Casa Hogar)<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_9.png" /> El arca de Queretaro I. A.P. (Taller de día)<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_10.png" /> Gigis Playhouse Mexico<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_11.png" /> Institucion Ana Cristina Juarez Diez Marina<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_12.png" /> Mentes capaces<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_13.png" /> Nens De Llun<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_14.png" /> Nuevo Mundo En Educacion Especial Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_15.png" /> Polo De Desarrollo Dif Villa Progreso<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_16.png" /> Tesili Comunidad<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_17.png" /> Unidad Basica De Reabilitacion Smdif De Arroyo Seco Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_18.png" /> Unidad Basica De Rehabilitacion<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_19.png" /> Unidad Basica De Rehabilitacion Extension Bernal<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_20.png" /> Unidad Basica De Rehabilitacion La Fuente<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_21.png" /> Unidad De Rehabilitacion<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_22.png" /> Unidos Queretaro<br />\
    <img src="styles/legend/InstitucionesQueretaro_6_23.png" /> <br />' });
var format_Visual_7 = new ol.format.GeoJSON();
var features_Visual_7 = format_Visual_7.readFeatures(json_Visual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Visual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Visual_7.addFeatures(features_Visual_7);
var lyr_Visual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Visual_7, 
                style: style_Visual_7,
                popuplayertitle: 'Visual',
                interactive: true,
    title: 'Visual<br />\
    <img src="styles/legend/Visual_7_0.png" /> Visual<br />' });
var format_Multiple_8 = new ol.format.GeoJSON();
var features_Multiple_8 = format_Multiple_8.readFeatures(json_Multiple_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multiple_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiple_8.addFeatures(features_Multiple_8);
var lyr_Multiple_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiple_8, 
                style: style_Multiple_8,
                popuplayertitle: 'Multiple',
                interactive: true,
    title: 'Multiple<br />\
    <img src="styles/legend/Multiple_8_0.png" /> Multiple<br />' });
var format_Lenguaje_9 = new ol.format.GeoJSON();
var features_Lenguaje_9 = format_Lenguaje_9.readFeatures(json_Lenguaje_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lenguaje_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lenguaje_9.addFeatures(features_Lenguaje_9);
var lyr_Lenguaje_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lenguaje_9, 
                style: style_Lenguaje_9,
                popuplayertitle: 'Lenguaje',
                interactive: true,
    title: 'Lenguaje<br />\
    <img src="styles/legend/Lenguaje_9_0.png" /> Lenguaje<br />' });
var format_IntelectualPsicosocial_10 = new ol.format.GeoJSON();
var features_IntelectualPsicosocial_10 = format_IntelectualPsicosocial_10.readFeatures(json_IntelectualPsicosocial_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntelectualPsicosocial_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntelectualPsicosocial_10.addFeatures(features_IntelectualPsicosocial_10);
var lyr_IntelectualPsicosocial_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IntelectualPsicosocial_10, 
                style: style_IntelectualPsicosocial_10,
                popuplayertitle: 'Intelectual Psicosocial',
                interactive: true,
    title: 'Intelectual Psicosocial<br />\
    <img src="styles/legend/IntelectualPsicosocial_10_0.png" /> Intelectual/Psicosocial<br />' });
var format_FisicaMotriz_11 = new ol.format.GeoJSON();
var features_FisicaMotriz_11 = format_FisicaMotriz_11.readFeatures(json_FisicaMotriz_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FisicaMotriz_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FisicaMotriz_11.addFeatures(features_FisicaMotriz_11);
var lyr_FisicaMotriz_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FisicaMotriz_11, 
                style: style_FisicaMotriz_11,
                popuplayertitle: 'Fisica Motriz',
                interactive: true,
    title: 'Fisica Motriz<br />\
    <img src="styles/legend/FisicaMotriz_11_0.png" /> Fisica/Motriz<br />' });
var group_CentrosdeApoyo = new ol.layer.Group({
                                layers: [lyr_Visual_7,lyr_Multiple_8,lyr_Lenguaje_9,lyr_IntelectualPsicosocial_10,lyr_FisicaMotriz_11,],
                                fold: 'open',
                                title: 'Centros de Apoyo'});
var group_CentrosdeapoyoQueretaro = new ol.layer.Group({
                                layers: [lyr_Queretaro_5,lyr_InstitucionesQueretaro_6,],
                                fold: 'close',
                                title: 'Centros de apoyo Queretaro '});
var group_CentrosdeapoyoGuanajuato = new ol.layer.Group({
                                layers: [lyr_Guanajuato_3,lyr_InstitucionesGuanajuato_4,],
                                fold: 'close',
                                title: 'Centros de apoyo Guanajuato '});

lyr_Satellite_0.setVisible(true);lyr_Entidades_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_Guanajuato_3.setVisible(true);lyr_InstitucionesGuanajuato_4.setVisible(true);lyr_Queretaro_5.setVisible(true);lyr_InstitucionesQueretaro_6.setVisible(true);lyr_Visual_7.setVisible(true);lyr_Multiple_8.setVisible(true);lyr_Lenguaje_9.setVisible(true);lyr_IntelectualPsicosocial_10.setVisible(true);lyr_FisicaMotriz_11.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Entidades_1,lyr_Municipios_2,group_CentrosdeapoyoGuanajuato,group_CentrosdeapoyoQueretaro,group_CentrosdeApoyo];
lyr_Entidades_1.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'NUM_EDO': 'NUM_EDO', });
lyr_Municipios_2.set('fieldAliases', {'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', });
lyr_Guanajuato_3.set('fieldAliases', {'qc_id': 'qc_id', 'entidad': 'entidad', 'num_edo': 'num_edo', });
lyr_InstitucionesGuanajuato_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'nombre de la unidad economica': 'nombre de la unidad economica', 'entidad federativa': 'entidad federativa', 'municipio': 'municipio', 'tipo': 'tipo', 'latitud': 'latitud', 'longitud': 'longitud', 'discapacidad que atiende': 'discapacidad que atiende', 'direccion': 'direccion', });
lyr_Queretaro_5.set('fieldAliases', {'qc_id': 'qc_id', 'entidad': 'entidad', 'num_edo': 'num_edo', });
lyr_InstitucionesQueretaro_6.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'nombre de la unidad economica': 'nombre de la unidad economica', 'entidad federativa': 'entidad federativa', 'municipio': 'municipio', 'tipo': 'tipo', 'latitud': 'latitud', 'longitud': 'longitud', 'discapacidad que atiende': 'discapacidad que atiende', 'direccion': 'direccion', });
lyr_Visual_7.set('fieldAliases', {'ID': 'ID', 'Nombre de la Unidad Economica': 'Nombre de la Unidad Economica', 'Entidad federativa': 'Entidad federativa', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Discapacidad que atiende': 'Discapacidad que atiende', 'Direccion': 'Direccion', });
lyr_Multiple_8.set('fieldAliases', {'ID': 'ID', 'Nombre de la Unidad Economica': 'Nombre de la Unidad Economica', 'Entidad federativa': 'Entidad federativa', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Discapacidad que atiende': 'Discapacidad que atiende', 'Direccion': 'Direccion', });
lyr_Lenguaje_9.set('fieldAliases', {'ID': 'ID', 'Nombre de la Unidad Economica': 'Nombre de la Unidad Economica', 'Entidad federativa': 'Entidad federativa', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Discapacidad que atiende': 'Discapacidad que atiende', 'Direccion': 'Direccion', });
lyr_IntelectualPsicosocial_10.set('fieldAliases', {'ID': 'ID', 'Nombre de la Unidad Economica': 'Nombre de la Unidad Economica', 'Entidad federativa': 'Entidad federativa', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Discapacidad que atiende': 'Discapacidad que atiende', 'Direccion': 'Direccion', });
lyr_FisicaMotriz_11.set('fieldAliases', {'ID': 'ID', 'Nombre de la Unidad Economica': 'Nombre de la Unidad Economica', 'Entidad federativa': 'Entidad federativa', 'Municipio': 'Municipio', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Discapacidad que atiende': 'Discapacidad que atiende', 'Direccion': 'Direccion', });
lyr_Entidades_1.set('fieldImages', {'ENTIDAD': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_Municipios_2.set('fieldImages', {'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', });
lyr_Guanajuato_3.set('fieldImages', {'qc_id': '', 'entidad': '', 'num_edo': '', });
lyr_InstitucionesGuanajuato_4.set('fieldImages', {'qc_id': '', 'id': '', 'nombre de la unidad economica': '', 'entidad federativa': '', 'municipio': '', 'tipo': '', 'latitud': '', 'longitud': '', 'discapacidad que atiende': '', 'direccion': '', });
lyr_Queretaro_5.set('fieldImages', {'qc_id': '', 'entidad': '', 'num_edo': '', });
lyr_InstitucionesQueretaro_6.set('fieldImages', {'qc_id': '', 'id': '', 'nombre de la unidad economica': '', 'entidad federativa': '', 'municipio': '', 'tipo': '', 'latitud': '', 'longitud': '', 'discapacidad que atiende': '', 'direccion': '', });
lyr_Visual_7.set('fieldImages', {'ID': 'Range', 'Nombre de la Unidad Economica': 'TextEdit', 'Entidad federativa': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Discapacidad que atiende': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Multiple_8.set('fieldImages', {'ID': 'Range', 'Nombre de la Unidad Economica': 'TextEdit', 'Entidad federativa': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Discapacidad que atiende': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Lenguaje_9.set('fieldImages', {'ID': 'Range', 'Nombre de la Unidad Economica': 'TextEdit', 'Entidad federativa': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Discapacidad que atiende': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_IntelectualPsicosocial_10.set('fieldImages', {'ID': 'Range', 'Nombre de la Unidad Economica': 'TextEdit', 'Entidad federativa': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Discapacidad que atiende': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_FisicaMotriz_11.set('fieldImages', {'ID': 'Range', 'Nombre de la Unidad Economica': 'TextEdit', 'Entidad federativa': 'TextEdit', 'Municipio': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Discapacidad que atiende': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_Entidades_1.set('fieldLabels', {'ENTIDAD': 'no label', 'NUM_EDO': 'no label', });
lyr_Municipios_2.set('fieldLabels', {'NOM_ENT': 'header label - always visible', 'NOM_MUN': 'header label - always visible', });
lyr_Guanajuato_3.set('fieldLabels', {'qc_id': 'hidden field', 'entidad': 'hidden field', 'num_edo': 'hidden field', });
lyr_InstitucionesGuanajuato_4.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'nombre de la unidad economica': 'header label - always visible', 'entidad federativa': 'header label - always visible', 'municipio': 'header label - always visible', 'tipo': 'header label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'discapacidad que atiende': 'header label - always visible', 'direccion': 'header label - always visible', });
lyr_Queretaro_5.set('fieldLabels', {'qc_id': 'hidden field', 'entidad': 'no label', 'num_edo': 'hidden field', });
lyr_InstitucionesQueretaro_6.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'nombre de la unidad economica': 'header label - always visible', 'entidad federativa': 'header label - always visible', 'municipio': 'header label - always visible', 'tipo': 'header label - always visible', 'latitud': 'hidden field', 'longitud': 'hidden field', 'discapacidad que atiende': 'header label - always visible', 'direccion': 'header label - always visible', });
lyr_Visual_7.set('fieldLabels', {'ID': 'hidden field', 'Nombre de la Unidad Economica': 'header label - always visible', 'Entidad federativa': 'header label - always visible', 'Municipio': 'header label - always visible', 'Tipo': 'header label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Discapacidad que atiende': 'header label - always visible', 'Direccion': 'header label - always visible', });
lyr_Multiple_8.set('fieldLabels', {'ID': 'hidden field', 'Nombre de la Unidad Economica': 'header label - always visible', 'Entidad federativa': 'header label - always visible', 'Municipio': 'header label - always visible', 'Tipo': 'header label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Discapacidad que atiende': 'header label - always visible', 'Direccion': 'header label - always visible', });
lyr_Lenguaje_9.set('fieldLabels', {'ID': 'hidden field', 'Nombre de la Unidad Economica': 'header label - always visible', 'Entidad federativa': 'header label - always visible', 'Municipio': 'header label - always visible', 'Tipo': 'header label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Discapacidad que atiende': 'header label - always visible', 'Direccion': 'header label - always visible', });
lyr_IntelectualPsicosocial_10.set('fieldLabels', {'ID': 'hidden field', 'Nombre de la Unidad Economica': 'header label - always visible', 'Entidad federativa': 'header label - always visible', 'Municipio': 'header label - always visible', 'Tipo': 'header label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Discapacidad que atiende': 'header label - always visible', 'Direccion': 'header label - always visible', });
lyr_FisicaMotriz_11.set('fieldLabels', {'ID': 'hidden field', 'Nombre de la Unidad Economica': 'header label - always visible', 'Entidad federativa': 'header label - always visible', 'Municipio': 'header label - always visible', 'Tipo': 'header label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Discapacidad que atiende': 'header label - always visible', 'Direccion': 'header label - always visible', });
lyr_FisicaMotriz_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});