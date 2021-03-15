var FAILUREEVENT = draw2d.shape.basic.Oval.extend({
    NAME: "FAILURE EVENT",
    init: function(attr, setter, getter) {
        this._super(
            $.extend({
                width: 100,
                height: 50,
                x: 100,
                y: 100
            }, attr),
            setter,
            getter);
        this.installEditPolicy(new SelectionMenuPolicy());


        var MyOutputPortLocator = draw2d.layout.locator.PortLocator.extend({
            init: function() {
                this._super();
            },
            relocate: function(index, figure) {
                var p = figure.getParent();

                this.applyConsiderRotation(figure, p.getWidth() / 2, 0);
            }
        });

        this.userData = {
            noOfPhases: attr.noOfPhases,
            thresholdPhase: attr.thresholdPhase,
            meanTTF: attr.meanTTF,
            repairCost: attr.repairCost
        }
        this.createPort("output", new MyOutputPortLocator());
        this.userData["Label"] = "FAILURE EVENT"
        this.classLabel = new draw2d.shape.basic.Label({
            text: "FAILURE Label",
            stroke: 1,
            fontColor: "#5856d6",
            bgColor: "#f7f7f7",
            radius: this.getRadius(),
            padding: 10,
            resizeable: true,
            editor: new draw2d.ui.LabelInplaceEditor({
                onCommit: $.proxy(function(value) {
                    this.userData["Label"] = value;
                }, this),
            })
        });

        this.add(this.classLabel, new draw2d.layout.locator.RightLocator());
    },

    /**
     * @method
     * Returns the Command to perform the specified Request or null.
     *
     * @param {draw2d.command.CommandType} request describes the Command being requested
     * @return {draw2d.command.Command} null or a Command
     * @private
     **/
    createCommand: function(request) {
        // this node didn't support rotation on doubleClick
        if (request.getPolicy() === draw2d.command.CommandType.ROTATE) {
            return null;
        }


        return this._super(request);
    },

    getProperties: function() {
        return this.userData;
    },

    setProperties: function(attr) {
        this.userData = {
                noOfPhases: attr.noOfPhases,
                thresholdPhase: attr.thresholdPhase,
                meanTTF: attr.meanTTF,
                repairCost: attr.repairCost
            }
            // console.log(this.userData);
    }


});