import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    dataSource: Object;
    constructor() {
        this.dataSource = {
            "chart": {
                "animation": "0",
                "showbevel": "0",
                "usehovercolor": "1",
                "canvasbordercolor": "FFFFFF",
                "bordercolor": "FFFFFF",
                "showlegend": "1",
                "legendposition": "BOTTOM",
                "legendborderalpha": "0",
                "legendbordercolor": "ffffff",
                "legendallowdrag": "0",
                "legendshadow": "0",
                "caption": "Performance par départements",
                "connectorcolor": "000000",
                "fillalpha": "80",
                "hovercolor": "CCCCCC",
                "showborder": 1,
                "theme": "fusion"
            },
            "colorrange": {
                "minvalue": "0",
                "startlabel": "Low",
                "endlabel": "High",
                "code": "#EAEEF7",
                "gradient": "1",
                "color": [
                {"maxvalue": "50", "code": "#59709F"}, 
                {"maxvalue": "100", "code": "#3A507E"}
                ]

            },
            "data": [{"id":"FR.AI","value":34},{"id":"FR.AS","value":82},{"id":"FR.AL","value":80},{"id":"FR.AP","value":11},{"id":"FR.AM","value":92},{"id":"FR.AH","value":30},{"id":"FR.AN","value":15},{"id":"FR.AG","value":28},{"id":"FR.AB","value":74},{"id":"FR.AD","value":48},{"id":"FR.AV","value":78},{"id":"FR.BD","value":63},{"id":"FR.BR","value":98},{"id":"FR.CV","value":78},{"id":"FR.CL","value":10},{"id":"FR.CT","value":2},{"id":"FR.CM","value":38},{"id":"FR.CH","value":40},{"id":"FR.CZ","value":36},{"id":"FR.CS","value":4},{"id":"FR.CO","value":4},{"id":"FR.CA","value":11},{"id":"FR.CR","value":3},{"id":"FR.DD","value":75},{"id":"FR.DB","value":21},{"id":"FR.DM","value":17},{"id":"FR.DS","value":30},{"id":"FR.EU","value":12},{"id":"FR.EL","value":34},{"id":"FR.ES","value":10},{"id":"FR.FI","value":14},{"id":"FR.GA","value":43},{"id":"FR.GE","value":73},{"id":"FR.GI","value":18},{"id":"FR.HE","value":67},{"id":"FR.HD","value":1},{"id":"FR.HG","value":33},{"id":"FR.HL","value":18},{"id":"FR.HM","value":49},{"id":"FR.HP","value":37},{"id":"FR.HR","value":25},{"id":"FR.HN","value":47},{"id":"FR.HS","value":14},{"id":"FR.HV","value":34},{"id":"FR.HA","value":74},{"id":"FR.HC","value":13},{"id":"FR.IV","value":44},{"id":"FR.IL","value":49},{"id":"FR.IN","value":36},{"id":"FR.IS","value":56},{"id":"FR.JU","value":41},{"id":"FR.LD","value":13},{"id":"FR.LC","value":17},{"id":"FR.LR","value":40},{"id":"FR.LA","value":36},{"id":"FR.LT","value":93},{"id":"FR.LO","value":15},{"id":"FR.LG","value":22},{"id":"FR.LZ","value":14},{"id":"FR.ML","value":7},{"id":"FR.MH","value":26},{"id":"FR.MR","value":36},{"id":"FR.MY","value":13},{"id":"FR.MM","value":10},{"id":"FR.MS","value":18},{"id":"FR.MB","value":15},{"id":"FR.MO","value":28},{"id":"FR.NI","value":14},{"id":"FR.NO","value":7},{"id":"FR.OI","value":46},{"id":"FR.OR","value":56},{"id":"FR.PC","value":13},{"id":"FR.PD","value":50},{"id":"FR.PA","value":28},{"id":"FR.PO","value":28},{"id":"FR.RH","value":28},{"id":"FR.SL","value":18},{"id":"FR.SS","value":28},{"id":"FR.ST","value":19},{"id":"FR.SV","value":18},{"id":"FR.SM","value":38},{"id":"FR.SE","value":19},{"id":"FR.SO","value":47},{"id":"FR.TB","value":47},{"id":"FR.TA","value":47},{"id":"FR.TG","value":47},{"id":"FR.VP","value":47},{"id":"FR.VD","value":47},{"id":"FR.VM","value":47},{"id":"FR.VN","value":88},{"id":"FR.VG","value":48},{"id":"FR.VO","value":84},{"id":"FR.VR","value":88},{"id":"FR.VC","value":48},{"id":"FR.YV","value":48},{"id":"FR.YO","value":48},{"id":"FR.ME","value":39},{"id":"FR.GD"}]
        }
    }
}