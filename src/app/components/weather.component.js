"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var weather_service_1 = require("../services/weather.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.name = ' live weather';
        this.city = '';
        //this.weatherService.getweather(this.city).subscribe(weathers => {this.weathers = weathers;});
    }
    WeatherComponent.prototype.method = function (a) {
        var _this = this;
        //alert('enterd');
        //this.name = ' live weather';
        this.city = a;
        console.log("Inside methoddddd" + a);
        //this.weathers = this.weatherService.getweather(this.city);
        this.weatherService.getweather(this.city).subscribe(function (weathers) { _this.weathers = weathers; });
        //this.weathers = this.weatherService.getweather(this.city);
        //console.log("Inside methoddddd");
        //console.log(weathers);
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'weather',
        templateUrl: 'weather.component.html',
        styleUrls: ['../../weather.css'],
        providers: [weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map