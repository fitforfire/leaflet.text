/*
*
* A Leaflet extension for showing text on a map
* by Andreas Rauchenbacher - Team122.at
* Github Repo: https://github.com/fitforfire/leaflet.text.git
*/

(function () {

    L.TextIcon = L.DivIcon.extend({
        initialize: function(options) {
            if (!options.size) {
                options.size = 24;
            }
            if (!options.color) {
                options.color = 'blue';
            }
            if (!options.text) {
                options.text = 'Text';
            }
            L.setOptions(this, options);
        },
        createIcon: function() {
            var containerElement = document.createElement('div');
            containerElement.className = 'leaflet-marker-icon leaflet-text-marker';

            this._spanElement = document.createElement('span');
            this.update();

            containerElement.appendChild(this._spanElement);
            return containerElement;
        },
        update: function() {
            this._spanElement.className = 'leaflet-color-' + this.options.color ;
            this._spanElement.style.fontSize = this.options.size + 'px';
            this._spanElement.innerText = this.options.text;
        },
        fontsizeIncrease: function() {
            this.options.size += 8;
            this.update();
        },
        fontsizeDecrease: function() {
            this.options.size -= 8;
            this.update();
        },
        setText: function(text) {
            this.options.text = text;
            this.update();
        }
    });

}());
