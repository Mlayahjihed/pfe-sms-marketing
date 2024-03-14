import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Chart as ChartJS, PointElement, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2';
import { GetProfiles } from '../../../redux/action/profile'
import { prix, enatt, accepter, dashpack, dashpacky, dashsms } from '../../../redux/action/dash2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);
const Statistique = () => {








  const profiles = useSelector(state => state.profiles);
  const info = useSelector(state => state.info);
  let is=info.sms
 
  var ff=[]
  var gg=[]
  for (let o=0;o<is.length ;o++) {
    ff[o]=is[o].Month
    gg[o]=is[o].count
  
  }
 
  var pack = info.pack;
  let packy=info.packy
  var y = [];
  var i = 0;
  var cat = []
  var k = []
  for (var key in pack) {
    cat[i] = key;
    k[i]=Number(pack[key]);
    y[i] =
    {
      name: key,
      data: pack[key],
    };
    i++
  }
  const fo=packy.forfaits
  let da=packy.data
  let q=[];
  let p=[]; 
  let n=0
for(let keys in da){
q[n]=da[n].year;
p[n]={
  name: da[n].year,
      data: da[n].count,
}
n++
}
 

  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800", "#66bb6a", "#ef5350", "#0000ff"],
      chart: {
        id: "basic-bar",
      },
      title: {
        text: 'Statistique Nombre des clients par forfait',
        align: 'left'
      },
      xaxis: {
        categories: [" pack"],
      },
    },
    series: y,
  });
  useEffect(async () => {
    await dispatch(dashsms())
  }, []);
  useEffect(async () => {
    await dispatch(dashpacky())
  }, []);

  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(dashpack())
  }, []);
  useEffect(async () => {
    await dispatch(enatt())
  }, []);
  useEffect(async () => {
    await dispatch(accepter())
  }, []);
  useEffect(async () => {
    await dispatch(prix())
  }, []);
  useEffect(async () => {
    await dispatch(GetProfiles())
  }, []);
  const [state2, setState2] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      title: {
        text: "Statistique d'achat forfait par annnée",
        align: 'left'
      },
      xaxis: {
        categories: fo,
      },
    },
    series: p,
  });
  return (
    <div className='col py-3 '>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card-counter primary">
              <i class="fa fa-usd"></i>
              <span class="count-numbers"> {info.totaleprix} DT</span>
              <span class="count-name"> VENTES</span>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-counter danger">
              <i class="fa fa-pause"></i>
              <span class="count-numbers">     {info.Enatt.length}</span>
              <span class="count-name"> ACHATS EN ATTENTE</span>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-counter success">
              <i class="fa fa-check"></i>
              <span class="count-numbers">   {info.accepter.length}</span>
              <span class="count-name"> ACHATS ACCEPTER</span>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-counter info">
              <i class="fa fa-users"></i>
              <span class="count-numbers">    {profiles.profiles.length}</span>
              <span class="count-name"> CLIENTS</span>
            </div>
          </div>
        </div>
        <div>
          <br></br>
          <div className=" row mt-5">
            <div className="card col-md-5 "  >
              <br></br>
              <Chart
                options={state.options}
                series={state.series}
                type="histogram"
                
              />
             
              <br></br>
              </div>
              <div className="card col-md-5 "  >
              <br></br>
              <Chart
                options={state2.options}
                series={state2.series}
                type="area"
            
              />
              
            </div>
            
            <div className="card  "  >
              <br></br>
              <Line
          data={{
            labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
            datasets: [
              {
                label: 'SMS Envoyée',
                backgroundColor: [
                  'rgba(0, 129, 253, 0.8)',
                 
                  

                ],
                borderColor: 'rgba(89,5,1)',
                borderWidth: 2,
                data: gg
              }
            ]
          }}options={{
            plugins: {
              title: {
                display: true,
                text: "statistique des SMS envoyée par Mois",
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'left',


              }
            }
          }}
          
        />
              
            </div>
            <div >
             
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Statistique;
