﻿// Copyright 2013// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril// enable double clicking from the Finder or Explorer#target photoshop//Make Photoshop the front most applicationapp.bringToFront();///////////////////////////////////////////////////// SETUP//////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////////function brushTool() {    // =======================================================    var idslct = charIDToTypeID( "slct" );        var desc10 = new ActionDescriptor();        var idnull = charIDToTypeID( "null" );            var ref8 = new ActionReference();            var idPbTl = charIDToTypeID( "PbTl" );            ref8.putClass( idPbTl );        desc10.putReference( idnull, ref8 );    executeAction( idslct, desc10, DialogModes.NO );};//=========================================//                    brushTool.main//=========================================//brushTool.main = function () {  brushTool();};//app.activeDocument.suspendHistory("Brush Tool", 'brushTool.main()');brushTool.main();