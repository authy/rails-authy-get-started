var Authy = {};

Authy.UI = function() {
    // Attributes
    var self = this;
    var tooltipTitle = "Authy Help";
    var tooltipMessage = 'This token is only needed if you setup Authy to protect your account. Learn more <a href="https://authy.com/help">here</a>';

    var countriesList = [
        {"country":"United States of America","code":"1"},{"country":"Canada","code":"1"},{"country":"Russia","code":"7"},{"country":"Kazakhstan","code":"7"},
        {"country":"Egypt","code":"20"},{"country":"South Africa","code":"27"},{"country":"Greece","code":"30"},{"country":"Netherlands","code":"31"},
        {"country":"Belgium","code":"32"},{"country":"France","code":"33"},{"country":"Spain","code":"34"},{"country":"Hungary","code":"36"},
        {"country":"Italy","code":"39"},{"country":"Romania","code":"40"},{"country":"Switzerland","code":"41"},{"country":"Austria","code":"43"},
        {"country":"United Kingdom","code":"44"},{"country":"Guernsey","code":"44"},{"country":"Isle of Man","code":"44"},{"country":"Jersey","code":"44"},
        {"country":"Denmark","code":"45"},{"country":"Sweden","code":"46"},{"country":"Norway","code":"47"},{"country":"Poland","code":"48"},
        {"country":"Germany","code":"49"},{"country":"Peru","code":"51"},{"country":"Mexico","code":"52"},{"country":"Cuba","code":"53"},
        {"country":"Argentina","code":"54"},{"country":"Brazil","code":"55"},{"country":"Chile","code":"56"},{"country":"Colombia","code":"57"},
        {"country":"Venezuela","code":"58"},{"country":"Malaysia","code":"60"},{"country":"Australia","code":"61"},{"country":"Indonesia","code":"62"},
        {"country":"Philippines","code":"63"},{"country":"New Zealand","code":"64"},{"country":"Singapore","code":"65"},{"country":"Thailand","code":"66"},
        {"country":"Japan","code":"81"},{"country":"Korea (South)","code":"82"},{"country":"Vietnam","code":"84"},{"country":"China","code":"86"},
        {"country":"Turkey","code":"90"},{"country":"India","code":"91"},{"country":"Pakistan","code":"92"},{"country":"Afghanistan","code":"93"},
        {"country":"Sri Lanka","code":"94"},{"country":"Myanmar","code":"95"},{"country":"Iran","code":"98"},{"country":"Morocco","code":"212"},
        {"country":"Algeria","code":"213"},{"country":"Tunisia","code":"216"},{"country":"Libya","code":"218"},{"country":"Gambia","code":"220"},
        {"country":"Senegal","code":"221"},{"country":"Mauritania","code":"222"},{"country":"Mali Republic","code":"223"},{"country":"Guinea","code":"224"},
        {"country":"Ivory Coast","code":"225"},{"country":"Burkina Faso","code":"226"},{"country":"Niger","code":"227"},{"country":"Togo","code":"228"},
        {"country":"Benin","code":"229"},{"country":"Mauritius","code":"230"},{"country":"Liberia","code":"231"},{"country":"Sierra Leone","code":"232"},
        {"country":"Ghana","code":"233"},{"country":"Nigeria","code":"234"},{"country":"Chad","code":"235"},{"country":"Central African Republic","code":"236"},
        {"country":"Cameroon","code":"237"},{"country":"Cape Verde Islands","code":"238"},{"country":"Sao Tome and Principe","code":"239"},
        {"country":"Gabon","code":"241"},{"country":"Congo, Democratic Republ","code":"243"},{"country":"Angola","code":"244"},
        {"country":"Guinea-Bissau","code":"245"},{"country":"Seychelles","code":"248"},{"country":"Sudan","code":"249"},{"country":"Rwanda","code":"250"},
        {"country":"Ethiopia","code":"251"},{"country":"Somalia","code":"252"},{"country":"Djibouti","code":"253"},{"country":"Kenya","code":"254"},
        {"country":"Tanzania","code":"255"},{"country":"Uganda","code":"256"},{"country":"Burundi","code":"257"},{"country":"Mozambique","code":"258"},
        {"country":"Zambia","code":"260"},{"country":"Madagascar","code":"261"},{"country":"Reunion","code":"262"},{"country":"Zimbabwe","code":"263"},
        {"country":"Namibia","code":"264"},{"country":"Malawi","code":"265"},{"country":"Lesotho","code":"266"},{"country":"Botswana","code":"267"},
        {"country":"Swaziland","code":"268"},{"country":"Mayotte Island","code":"269"},{"country":"Aruba","code":"297"},{"country":"Faroe Islands","code":"298"},
        {"country":"Greenland","code":"299"},{"country":"Gibraltar","code":"350"},{"country":"Portugal","code":"351"},{"country":"Luxembourg","code":"352"},
        {"country":"Ireland","code":"353"},{"country":"Iceland","code":"354"},{"country":"Albania","code":"355"},{"country":"Malta","code":"356"},
        {"country":"Cyprus","code":"357"},{"country":"Finland","code":"358"},{"country":"Bulgaria","code":"359"},{"country":"Lithuania","code":"370"},
        {"country":"Latvia","code":"371"},{"country":"Estonia","code":"372"},{"country":"Moldova","code":"373"},{"country":"Armenia","code":"374"},
        {"country":"Belarus","code":"375"},{"country":"Andorra","code":"376"},{"country":"Monaco","code":"377"},{"country":"San Marino","code":"378"},
        {"country":"Ukraine","code":"380"},{"country":"Serbia","code":"381"},{"country":"Montenegro","code":"382"},{"country":"Croatia","code":"385"},
        {"country":"Slovenia","code":"386"},{"country":"Bosnia-Herzegovina","code":"387"},{"country":"Macedonia","code":"389"},
        {"country":"Czech Republic","code":"420"},{"country":"Slovakia","code":"421"},{"country":"Liechtenstein","code":"423"},
        {"country":"Falkland Islands","code":"500"},{"country":"Belize","code":"501"},{"country":"Guatemala","code":"502"},{"country":"El Salvador","code":"503"},
        {"country":"Honduras","code":"504"},{"country":"Nicaragua","code":"505"},{"country":"Costa Rica","code":"506"},{"country":"Panama","code":"507"},
        {"country":"Haiti","code":"509"},{"country":"Guadeloupe","code":"590"},{"country":"Bolivia","code":"591"},{"country":"Guyana","code":"592"},
        {"country":"Ecuador","code":"593"},{"country":"French Guiana","code":"594"},{"country":"Paraguay","code":"595"},{"country":"Martinique","code":"596"},
        {"country":"Suriname","code":"597"},{"country":"Uruguay","code":"598"},{"country":"Netherlands Antilles","code":"599"},{"country":"Timor-Leste","code":"670"},
        {"country":"Guam","code":"671"},{"country":"Brunei","code":"673"},{"country":"Nauru","code":"674"},{"country":"Papua New Guinea","code":"675"},
        {"country":"Tonga","code":"676"},{"country":"Solomon Islands","code":"677"},{"country":"Vanuatu","code":"678"},{"country":"Fiji Islands","code":"679"},
        {"country":"Cook Islands","code":"682"},{"country":"Samoa","code":"685"},{"country":"New Caledonia","code":"687"},{"country":"French Polynesia","code":"689"},
        {"country":"Korea (North)","code":"850"},{"country":"HongKong","code":"852"},{"country":"Macau","code":"853"},{"country":"Cambodia","code":"855"},
        {"country":"Laos","code":"856"},{"country":"Bangladesh","code":"880"},{"country":"International","code":"882"},{"country":"Taiwan","code":"886"},
        {"country":"Maldives","code":"960"},{"country":"Lebanon","code":"961"},{"country":"Jordan","code":"962"},{"country":"Syria","code":"963"},
        {"country":"Iraq","code":"964"},{"country":"Kuwait","code":"965"},{"country":"Saudi Arabia","code":"966"},{"country":"Yemen","code":"967"},
        {"country":"Oman","code":"968"},{"country":"Palestine","code":"970"},{"country":"United Arab Emirates","code":"971"},{"country":"Israel","code":"972"},
        {"country":"Bahrain","code":"973"},{"country":"Qatar","code":"974"},{"country":"Bhutan","code":"975"},{"country":"Mongolia","code":"976"},
        {"country":"Nepal","code":"977"},{"country":"Tajikistan","code":"992"},{"country":"Turkmenistan","code":"993"},{"country":"Azerbaijan","code":"994"},
        {"country":"Georgia","code":"995"},{"country":"Kyrgyzstan","code":"996"},{"country":"Uzbekistan","code":"998"},{"country":"Bahamas","code":"1242"},
        {"country":"Barbados","code":"1246"},{"country":"Anguilla","code":"1264"},{"country":"Antigua and Barbuda","code":"1268"},
        {"country":"Virgin Islands, British","code":"1284"},{"country":"Cayman Islands","code":"1345"},{"country":"Bermuda","code":"1441"},
        {"country":"Grenada","code":"1473"},{"country":"Turks and Caicos Islands","code":"1649"},{"country":"Montserrat","code":"1664"},
        {"country":"Saint Lucia","code":"1758"},{"country":"Dominica","code":"1767"},{"country":"St. Vincent and The Gren","code":"1784"},
        {"country":"Puerto Rico","code":"1787"},{"country":"Dominican Republic","code":"1809"},{"country":"Dominican Republic2","code":"1829"},
        {"country":"Dominican Republic3","code":"1849"},{"country":"Trinidad and Tobago","code":"1868"},{"country":"Saint Kitts and Nevis","code":"1869"},
        {"country":"Jamaica","code":"1876"},{"country":"Congo","code":"2420"}
    ];
    var countries = [];

    // Private Members
    var setupCellphoneValidation = function() {
        var cellPhone = document.getElementById("authy-cellphone");
        if(!cellPhone) return;

        cellPhone.onblur = function(){
          if(cellPhone.value != '' && cellPhone.value.match(/^([0-9][0-9][0-9])\W*([0-9][0-9]{2})\W*([0-9]{3,5})$/)){
            cellPhone.style.backgroundColor = "white";
          } else {
            cellPhone.style.backgroundColor = "#F2DEDE";
          }
        }
    };

    var setupAuthyToken = function() {
        var token = document.getElementById("authy-token");
        if(!token) return;

        token.onblur = function() {
          if(token.value != '' && token.value.match(/^\d+$/)){
            token.style.backgroundColor = "white";
          } else {
            token.style.backgroundColor = "#F2DEDE";
          }
        };
    };

    var setupTooltip = function() {
        var authy_help = document.getElementById("authy-help");
        if(!authy_help) return;

        var tooltip = document.createElement("div");
        tooltip.setAttribute("id", "authy-tooltip");

        var pos = absolutePosFor(authy_help);

        var tooltipTop = pos[0];
        var tooltipLeft = pos[1]+10;



        tooltip.setAttribute("style", "top:" + tooltipTop + "px;left:" + tooltipLeft + "px;");
        tooltip.innerHTML = '<a id="authy-tooltip-close"></a><h3 class="tooltip-title">'+tooltipTitle+'</h3><p class="tooltip-content">'+tooltipMessage+'</p>';
        document.body.appendChild(tooltip);
        document.getElementById('authy-help').onclick = function(){ document.getElementById("authy-tooltip").style.display = "block"; };
        document.getElementById('authy-tooltip-close').onclick = function(){ document.getElementById("authy-tooltip").style.display = "none"; };
    };

    var processKey40 = function() {
        var countriesArr = document.getElementById('countries-autocomplete').getElementsByTagName('li');
        for(var i=0; i<countriesArr.length; i++){
            if(document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className == 'active'){
                document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className = '';
                if((i+1) == countriesArr.length){
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].className = 'active';
                } else {
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[i+1].className = 'active';
                }
                return false;
            }
        }
        document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].setAttribute('class', 'active');
    };

    var processKey38 = function() {
        var countriesArr = document.getElementById('countries-autocomplete').getElementsByTagName('li');
        for(var i=countriesArr.length-1; i>=0; i--){
            if(document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className == 'active'){
                document.getElementById('countries-autocomplete').getElementsByTagName('li')[i].className = '';
                if(i == 0){
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[countriesArr.length-1].className = 'active';
                } else {
                    document.getElementById('countries-autocomplete').getElementsByTagName('li')[i-1].className = 'active';
                }
                return false;
            }
        }
        document.getElementById('countries-autocomplete').getElementsByTagName('li')[0].setAttribute('class', 'active');
    }

    var processKey13 = function() {
        var obj = document.getElementById('countries-autocomplete').getElementsByClassName('active')[0];
        self.autocomplete(obj);
        return false;
    }

    var setupEvents = function() {
        var countriesInput = document.getElementById('countries-input');

        if(!countriesInput) return;

        countriesInput.onfocus = function() {
            document.getElementById('countries-autocomplete').style.display = "block";
        }

        countriesInput.onkeyup = function(event) {
            document.getElementById('countries-autocomplete').style.display = "block";
            var keyID = event.keyCode;

            switch(keyID) {
                case 13:
                    processKey13();
                    return false;
                break;
                case 40:
                    if(processKey40() == false)
                        return false;
                break;
                case 38:
                    if(processKey38() == false)
                        return false;
                break;
            }

            self.searchItem();
        };

        countriesInput.onkeypress = function(event) {
          if(event.keyCode == 13) {
              processKey13();
              return false;
          }
        };

        document.getElementById('countries-autocomplete').onclick = function(e){
            if(e && e.stopPropagation) {
                e.stopPropagation();
            } else {
                e = window.event;
                e.cancelBubble = true;
            }
        }

        document.getElementById('countries-input').onclick = function(e){
            if(e && e.stopPropagation) {
                e.stopPropagation();

                countriesInput.focus();
                countriesInput.select();
            } else {
                e = window.event;
                e.cancelBubble = true;
            }
        }

        document.onclick = function() {
            document.getElementById('countries-autocomplete').style.display = "none";
        }


    };

    var buildItem = function(classActive, country) {
        var cc = country.country.substring(0,2).toLowerCase()+country.code;
        return '<li class="' + classActive + '" onclick="Authy.UI.instance().autocomplete(this);return false;" rel="' + country.code + '" data-name="' + country.country + '"'+ '>'+
               '<span class="aflag flag_' + cc + '"></span> '+
               ' <span>(+'+ country.code + ') ' + country.country + '</span></li>';
    }

    var absolutePosFor = function(element) {
        var absTop = 0;
        var absLeft = 0;
        while(element) {
            absTop += element.offsetTop;
            absLeft += element.offsetLeft;

            element = element.offsetParent;
        }

        return [absTop, absLeft];
    }

    var setupCountriesDropdown = function() {
        var countriesSelect = document.getElementById("authy-countries");

        if(!countriesSelect) return;

        self.countries = [];
        for( var i=0; i < countriesSelect.getElementsByTagName("option").length; i++){
            var buf = [];
            buf[0] = countriesSelect.getElementsByTagName("option")[i].value;
            buf[1] = countriesSelect.getElementsByTagName("option")[i].innerHTML;
            self.countries.push(buf);
        }

        countriesSelect.setAttribute("style", "display:none");
        var name = countriesSelect.getAttribute("name");
        countriesSelect.removeAttribute("name");

        var countriesAutocomplete = document.createElement("div");
        var countryCodeValue = document.createElement("input");
        countryCodeValue.setAttribute("type", "hidden");
        countryCodeValue.setAttribute("id", "country-code");
        countryCodeValue.setAttribute("name", name);

        var classActive = '';

        var countriesAutocompleteHTML = '<ul>';

        for( var i=0; i < countriesList.length; i++){
            classActive = (i == 0) ? 'active' : '';
            countriesAutocompleteHTML += buildItem(classActive, countriesList[i]);
        }
        countriesAutocompleteHTML += '</ul>';
        countriesAutocomplete.innerHTML = countriesAutocompleteHTML;

        document.body.appendChild(countriesAutocomplete);

        var countriesInput = document.createElement("input");
        countriesInput.setAttribute("id", "countries-input");
        countriesInput.setAttribute("type", "text");
        countriesInput.setAttribute("autocomplete", "off");

        countriesSelect.parentNode.insertBefore(countriesInput, countriesSelect);
        countriesSelect.parentNode.appendChild(countryCodeValue);

        var pos = absolutePosFor(countriesInput);

        countriesAutocomplete.setAttribute("id", "countries-autocomplete");
        countriesAutocomplete.setAttribute("style", "width: "+(countriesInput.offsetWidth-5)+"px; top: " + (pos[0]+27)  + "px; left: " + pos[1]  + "px;");
    };

    // Public Members
    this.init = function() {
        setupAuthyToken();
        setupTooltip();
        setupCountriesDropdown();
        setupEvents();
        setupCellphoneValidation();
    }

    this.searchItem = function() {
        var classActive = 'active';
        var countriesInput = document.getElementById('countries-input');
        var str = countriesInput.value;
        var countriesAutocompleteHTML = '<ul>';
        var ok = false;

        str = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        var reg = new RegExp(str, "g");
        for( var i=0; i < countriesList.length; i++){
            var country = countriesList[i];
            if(country.country.toLowerCase().match(reg)) {
                countriesAutocompleteHTML += buildItem(classActive, country);
                classActive = '';
                ok = true;
            }
        }
        countriesAutocompleteHTML += '</ul>';
        if(ok) {
            document.getElementById('countries-autocomplete').innerHTML = countriesAutocompleteHTML;
        }
    }

    this.autocomplete = function(obj) {
        document.getElementById('countries-input').value = obj.getAttribute("data-name");
        document.getElementById('countries-autocomplete').style.display = "none";

        document.getElementById('country-code').value = obj.getAttribute('rel');
    }

    this.setTooltip = function(title, msg) {
        var tooltip = document.getElementById("authy-tooltip");
        if(!tooltip) return;

        tooltip.getElementsByClassName("tooltip-title")[0].innerHTML = title;
        tooltip.getElementsByClassName("tooltip-content")[0].innerHTML = msg;
    }
};

Authy.UI.instance = function() {
    if(!this.ui){
        this.ui = new Authy.UI();
        this.ui.init();
    }

    return this.ui;
}

window.onload = function() {
    Authy.UI.instance();
}
