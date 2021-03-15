View = draw2d.Canvas.extend({

    init: function(id) {
        this._super(id, 2000, 2000);

        this.setScrollArea("#" + id);
    },


    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop: function(droppedDomNode, x, y, shiftKey, ctrlKey) {
        // console.log(droppedDomNode, x, y);
        var type = $(droppedDomNode).data("shape");
        if (type == 'OR') {
            canvas.add(f2 = new OR({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                A: Math.floor(Math.random() * 10),
                B: Math.floor(Math.random() * 10)

            }));

        }

        if (type == 'AND') {
            canvas.add(f2 = new AND({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                A: Math.floor(Math.random() * 10),
                B: Math.floor(Math.random() * 10)

            }));

        }

        if (type == 'SAND') {
            canvas.add(f2 = new SAND({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                A: Math.floor(Math.random() * 10),
                B: Math.floor(Math.random() * 10)

            }));
        }



        if (type == 'FAI') {
            canvas.add(f2 = new FAILUREEVENT({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                noOfPhases: {
                    value: 0,
                    type: 'SLIDER',
                    name: 'No of Phases',
                    min: 0,
                    max: 12,
                    step: 1
                },
                thresholdPhase: {
                    value: 0,
                    type: 'SLIDER',
                    name: 'Threshhold Phase',
                    min: 0,
                    max: 12,
                    step: 1
                },
                meanTTF: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Mean time to Failure',
                    min: 0,
                    max: 365,
                    step: 3
                },
                repairCost: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Repair Cost',
                    min: 0,
                    max: 10000,
                    step: 1
                }

            }));

        }

        if (type == 'TOP') {
            canvas.add(f2 = new TOPEVENT({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                inspFreq: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Inspection Frequency',
                    min: 0,
                    max: 10000,
                    step: 1
                }

            }));
        }
        if (type == 'ATK') {

            canvas.add(f2 = new ATTACKEVENT({
                x: Math.round(x / 10) * 10,
                y: Math.round(y / 10) * 10,
                meanTTA: {
                    value: 0,
                    type: 'SLIDER',
                    name: 'Mean Time to Attack',
                    min: 0,
                    max: 365,
                    step: 1
                },
                detectionPercent: {
                    value: 0,
                    type: 'SLIDER',
                    name: 'Detection Percent',
                    min: 0,
                    max: 100,
                    step: 10
                },
                fixedCOA: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Fixed Cost of Attack',
                    min: 0,
                    max: 365,
                    step: 1
                },
                fixedDMG: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Fixed Damage',
                    min: 0,
                    max: 10000,
                    step: 1
                },
                enable: {
                    value: true,
                    type: 'BOOL',
                    name: 'enable'
                },
                detection: {
                    value: true,
                    type: 'BOOL',
                    name: 'Detection'
                },
                detectTime: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Detection Time',
                    min: 0,
                    max: 365,
                    step: 1
                },
                repairCost: {
                    value: 0,
                    type: 'NUMBER',
                    name: 'Repair Cost',
                    min: 0,
                    max: 100000,
                    step: 1
                }

            }));
        }
        // eval("new " + type + "();");

        // figure.addEntity("id");
        // figure.setName("NewTable");

        // create a command for the undo/redo support
        // var command = new draw2d.command.CommandAdd(this, figure, x, y);
        // this.getCommandStack().execute(command);
    }
});