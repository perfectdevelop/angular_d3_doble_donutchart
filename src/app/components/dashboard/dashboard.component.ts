import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Policy } from './data';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  policies: Policy = 
    {
      totalPlants : 70,
      activePolicies: 50,
      withOutPolicy: 30,
      nextToExpire: 60,
      underExpected: 5,
      overExpected: 100
    };

  donutChart: Chart;

  data1 = [
    {
      name: 'En lo esperado', //overexpected
      y: this.policies.overExpected,
      color: '#04a4be'
    },
    {
      name: 'Bajo lo esperado', //underexpected
      y: this.policies.underExpected,
      color: '#b3b9b8'
    }];

  data2 =[
      {
        name: 'Sistemas con póliza', //activePolicies
        y: this.policies.activePolicies,
        color: '#00ccb7'
      },
      {
        name: 'Póliza próxima a vencer', //nextToExpire
        y: this.policies.nextToExpire,
        color: '#ff9205'
      },
      {
        name: 'Sistemas sin póliza', //withOutPolicy
        y: this.policies.withOutPolicy,
        color: '#ff3f49'
      }
    ];

  initDonut2() {
    console.log("start!");
    var theTitle = this.policies.totalPlants;
    var titletext = theTitle.toString();
    const donut = new Chart({

      chart: {
        plotBackgroundColor: '#16232d',
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie',
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0
      },

      responsive: {  
        rules: [{  
          condition: {  
            maxWidth: 500  
          },  
          chartOptions: {  
            legend: {  
              enabled: false  
            }  
          }  
        }]  
      },

      tooltip: {
        formatter: function () {
          var ret = this.key + '<br /> ' + this.y; return ret;
        },
        backgroundColor: '#313c45',
        borderRadius: 10,
        borderWidth: 0,
        style: {
          color: "#c9d1d4",
        }
      },

      credits:{
        enabled: false
      },

      title: {
        text: titletext,
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '30'
        }
      },

      subtitle: {
        text: 'sistemas<br> en total',
        align: 'center',
        verticalAlign: 'middle',
        y: 18,
        style: {
          color: '#a2adb6',
          fontSize: '17'
        }
      },

      plotOptions: {
        pie: {
          borderWidth: 3,
          borderColor: '#16232d',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          startAngle: 40,
          endAngle: 400,
          center: ['50%', '50%'],
          size: '90%',
          showInLegend: false,
        },

        series: {
          states: {
            hover: {
              halo: {
                size: 1,
              }
            }
          },
          events: {
            click: function (e) {
              e.preventDefault();
              return false;
            }
          },
        }
      },

      series: [
        {
          data: this.data1,
          type: 'pie',
          innerSize: '86%',
          size: '100%'
        },
        {
          data: this.data2,
          type: 'pie',
          innerSize: '84%',
          size: '86%'
        }
      ]
    });
    this.donutChart = donut;
  }

  ngOnInit() {
    this.initDonut2();
  }
}