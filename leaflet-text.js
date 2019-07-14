/*
*
* A Leaflet extension for showing text on a map
* by Andreas Rauchenbacher - Team122.at
* Github Repo: https://github.com/fitforfire/leaflet.text.git
*/

(function () {

    L.TextIcon = L.DivIcon.extend({
        createIcon: function() {
            var textDiv = document.createElement('div');
            textDiv.className = 'leaflet-marker-icon leaflet-text-marker';

            var span = document.createElement('span');
            span.className = 'leaflet-color-' + (this.options.color ? this.options.color : 'blue');
            span.style.fontSize = (this.options.size ? this.options.size : 24) + 'px';
            span.innerText = this.options.text;

            textDiv.appendChild(span);
            return textDiv;
        }
    });

}());
