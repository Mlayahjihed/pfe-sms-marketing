import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, PointElement, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut, Pie, Line } from 'react-chartjs-2';
import { dash, dash2, dash3 } from '../../../redux/action/dash';
import { useDispatch, useSelector } from 'react-redux';
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

const Dashbord = () => {



  const dashs = useSelector(state => state.dashs)

  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(dash())
  }, [])
  useEffect(async () => {
    await dispatch(dash2())
  }, [])
  useEffect(async () => {
    await dispatch(dash3())
  }, [])
  return (
    <div className='col py-3  '>
      
      <div className="container  ">
        <div className=" row mt-5  ">
          <div class='card col-md-5  ' >
            <br></br>
            <Doughnut data={{
              labels: ["Monastir", "Sousse", "Mehdia",
                "Sfax", "Ariana", "Béja", "Ben Arous", "Gabés",
                "Gafsa", "Jandouba", "Kairouan", "Kef", "Kasserine",
                "Kebili", "Manouba", "Mednine", "Nabeul", "Tataouine", "Siliana",
                "Sidi Bouzide", "Touzer", "Zaghouan", "Tunis", "Bizerte"],

              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: [
                    'rgba(0, 162, 255, 0.8)',
                    'rgba(0, 247, 255, 0.8)',
                    'rgba(0, 255, 157, 0.8)',
                    'rgba(205, 247, 231, 0.8)',
                    'rgba(255, 0, 132, 0.8)',
                    'rgba(242, 144, 235, 0.8)',
                    'rgba(226, 0, 255, 0.8)',
                    'rgba(130, 0, 255, 0.8)',
                    'rgba(216, 185, 247, 0.8)',
                    'rgba(56, 8, 248, 0.8)',
                    'rgba(140, 112, 255, 0.8)',
                    'rgba(0, 249, 60, 0.8)',
                    'rgba(23, 243, 0, 0.8)',
                    'rgba(135, 255, 0, 0.8)',
                    'rgba(33, 63, 0, 0.8)',
                    'rgba(226, 255, 0, 0.8)',
                    'rgba(187, 162, 0, 0.8)',
                    'rgba(255, 173, 0, 0.8)',
                    'rgba(255, 221, 149, 0.8)',
                    'rgba(254, 103, 0, 0.8)',
                    'rgba(255, 40, 0, 0.8)',
                    'rgba(255, 0, 0, 0.8)',
                    'rgba(62, 0, 0, 0.8)',
                    'rgba(0, 0, 0, 0.8)',

                  ],
                  borderColor: 'rgba(89,5,1)',
                  borderWidth: 2,
                  data: dashs.dash,

                }
              ]
            }
            } options={{
              plugins: {
                title: {
                  display: true,
                  text: 'statistique des contacts par region ',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'left',


                }
              }
            }
            } />
            <br></br>

          </div>
          <br></br>
          <div class='card col-md-5 ' >
            <br></br>
            <Pie data={{
              labels: ["Homme", "femme"],
              datasets: [
                {
                  label: 'Rainfall',
                  backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',

                  ],
                  borderColor: 'rgba(89,5,1)',
                  borderWidth: 2,
                  data: dashs.dash2
                }
              ]
            }} options={{
              plugins: {
                title: {
                  display: true,
                  text: 'statistique des cantacts par sexe',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'left',


                }
              }
            }
            } />
            <br></br></div></div>
            <div className=" row mt-5 card  ">
            <Bar
          data={{
            labels: ["Adolescents ", "Adultes","Aînés"],
            datasets: [
              {
                label: 'Nombre de contacts ',
                backgroundColor: [
                  'rgba(242, 144, 235, 0.8)',
                 
                  

                ],
                borderColor: 'rgba(89,5,1)',
                borderWidth: 2,
                data: dashs.dash3
              }
            ]
          }}options={{
            plugins: {
              title: {
                display: true,
                text: "statistique des cantacts par Tranche d'age",
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
      </div>
     <br></br>
<br></br>
    </div>
  );
}

export default Dashbord;
