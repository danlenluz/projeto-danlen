import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const pro = [
  { id: 1, title: 'Dunkmaster Darius', description: 'TOP 1', imageUrl: 'https://th.bing.com/th/id/OIP.Wdyl0IO1q_nUjPK2Ulb3WAAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 2, title: 'Samira Soul Fighter', description: '2', imageUrl: 'https://th.bing.com/th/id/OIP.mmk5E1PUJNWAMXcvn8lLsgHaEL?rs=1&pid=ImgDetMain' },
  { id: 3, title: 'Projeto Mordekaiser', description: '3', imageUrl: 'https://th.bing.com/th/id/OIP.IbbVqi8Uzt3yZMqv_2S_gQHaEX?w=280&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 4, title: 'Garen Reinos Combatentes ', description: '4', imageUrl: 'https://th.bing.com/th/id/OIP.TH1Q_O8W8fOkJvUd0S6WXwHaFJ?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 5, title: 'Yasuo Emissario da Escuridão ', description: '5', imageUrl: 'https://th.bing.com/th/id/OIP.p05-eaAe3QaCnMJ5Tag_JgHaEX?w=280&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 6, title: 'Veigar Chefão Final ', description: '6', imageUrl: 'https://th.bing.com/th/id/OIP.R-ZxywWpANhTF5Ut2lebgwAAAA?rs=1&pid=ImgDetMain' },
  { id: 7, title: 'Kayn Emissario da Escuridão ', description: '7', imageUrl: 'https://static1-br.millenium.gg/articles/3/75/63/@/105470-leagueoflegends-20210908-111536-1435622858022023178-e-xsb2guuayq5aa-full-1.jpg' },
  { id: 8, title: 'Katarina Rainha de Batalha ', description: '8', imageUrl: 'https://static1-br.millenium.gg/articles/4/45/64/@/88244-katarina-rainha-de-batalha-foto-riot-gamesreproducao-full-1.jpg' },
  { id: 9, title: 'Rengar Caçador de Cabeças ', description: '9', imageUrl: 'https://th.bing.com/th/id/OIP.aWPkcg4v6qKSN-qaZMgP7gAAAA?w=313&h=184&c=7&r=0&o=5&pid=1.7' },
  { id: 10, title: 'Jhin Estrela Negra ', description: '10', imageUrl: 'https://th.bing.com/th/id/OIP.AvKv11L8eBRAiy9dgT8rNAAAAA?rs=1&pid=ImgDetMain' },
  { id: 11, title: 'Lux Elementista ', description: '11', imageUrl: 'https://th.bing.com/th/id/OIP.sm-tEe8bw8xHV5GWV-zbVwHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 12, title: 'Projeto Pyke ', description: '12', imageUrl: 'https://th.bing.com/th/id/OIP.Lfq8X2cjiTGZ74peeczzmQHaEX?w=288&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 13, title: 'Projeto Renekton ', description: '13', imageUrl: 'https://th.bing.com/th/id/OIP.LqT3FnVtfi0ds2RPlvtcWwHaEX?w=288&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 14, title: 'IG Kaisa ', description: '14', imageUrl: 'https://th.bing.com/th/id/OIP.x1MIBeXyrZqGVeUXUZb5RAAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7' },
  { id: 15, title: 'Fiora Espada Alada ', description: '15', imageUrl: 'https://th.bing.com/th/id/R.e84fe77b6e0300d92e9832531ebc5381?rik=NTpuBCpJIHWaKw&pid=ImgRaw&r=0' },
  { id: 17, title: 'Yone Emissario da Escuridão ', description: '16', imageUrl: 'https://th.bing.com/th/id/OIP.LGHg9HFL73hnk6yJy--bdwHaEX?rs=1&pid=ImgDetMain' },
  { id: 18, title: 'Yone Emissario da Escuridão ', description: '16', imageUrl: 'https://th.bing.com/th/id/OIP.LGHg9HFL73hnk6yJy--bdwHaEX?rs=1&pid=ImgDetMain' },
  { id: 19, title: 'Yone Emissario da Escuridão ', description: '16', imageUrl: 'https://th.bing.com/th/id/OIP.LGHg9HFL73hnk6yJy--bdwHaEX?rs=1&pid=ImgDetMain' },
  { id: 20, title: 'Yone Emissario da Escuridão ', description: '16', imageUrl: 'https://th.bing.com/th/id/OIP.LGHg9HFL73hnk6yJy--bdwHaEX?rs=1&pid=ImgDetMain' },
  // Adicione mais produtos conforme necessário
];

const App = () => (
  <div>
    <Title>20 Melhores skins do League of Legends</Title>
    <Description>Se liga</Description>
    <Products productList={pro} />
  </div>
);

export default App;
