const contacts = require("../models/contact");
const achat = require("../models/achat")

exports.dash = async (req, res, next) => {
    try {
        var region=["Monastir", "Sousse", "Mehdia",
        "Sfax", "Ariana","Béja", "Ben Arous", "Gabés",
        "Gafsa", "Jandouba","Kairouan", "Kef", "Kasserine",
        "Kebili", "Manouba","Mednine","Nabeul", "Tataouine", "Siliana",
        "Sidi Bouzide", "Touzer","Zaghouan","Tunis","Bizerte"];
        const data = await contacts.find({ user: req.user.id })
        var x=[];
        for (let i = 0; i < region.length; i++) {
            let n=0;
            for (let j = 0; j < data.length; j++) {
                if(data[j].region ===region[i]){
                    n++;
                }
               }
               x[i]=n
           }
           res.status(200).json(x)
    
      } catch (error) {
        next(error);
      }
  };
  exports.dash2 = async (req, res, next) => {
    try {
        var sexe=["Homme","Femme"];
        const data = await contacts.find({ user: req.user.id })
        var x=[];
        for (let i = 0; i < sexe.length; i++) {
            let n=0;
            for (let j = 0; j < data.length; j++) {
                if(data[j].sexe ===sexe[i]){
                    n++;
                }
               }
               x[i]=n
           }
           res.status(200).json(x)
    
      } catch (error) {
        next(error);
      }
  };
  exports.dash3 = async (req, res, next) => {
    try {
        var ages=["15 25","26 50","51 99"];
        const data = await contacts.find({ user: req.user.id })
        var x=[];
        for (let i = 0; i < ages.length; i++) {
           const age=ages[i]
            const m = age.split(" ");
            var a=Number(m[0])
            var b=Number(m[1])
            const z =data.filter(da => {
                return (da.age>=a && da.age<=b ) })
               x[i]=z.length
           }
           res.status(200).json(x)
    
      } catch (error) {
        next(error);
      }
  };
  exports.dashachatA = async (req, res, next) => {
    try {
      const data = await achat.find({etat:"Accepter"}) 
      res.status(200).json(data)

      } catch (error) {
        next(error);
      }
  };
  exports.dashachatE = async (req, res, next) => {
    try {
        const data = await achat.find({etat:"En attend"}) 
        res.status(200).json(data)

        
      } catch (error) {
        next(error);
      }
  };
  exports.dashforfait = async (req, res, next) => {
    try {
        const data = await achat.find({etat:"Accepter"}).populate('forfait')
        var totale=0;
        for(let i=0;i<data.length;i++){
totale=totale+Number(data[i].forfait.prix)
        }
        res.status(200).json(totale)
        
      } catch (error) {
        next(error);
      }
  };

  exports.dashpack = async (req, res, next) => {
    try {
        const data = await achat.find().populate('forfait')
        var s=[];
        var t=0;
        for(let i=0;i<data.length;i++){
          var y=data[i]
           if (y.etat!=="En attend"){
            s[t]=y;
            t++
           }
        }
        var n=[];
        for(let j=0;j<s.length;j++){
         var z=s[j];
          n[j]=z.forfait.nompack
        }
        var con = [...new Set(n)]
        var us=[]
        
        for(let j=0;j<con.length;j++){
          var l = s.filter(fa => {
            return (fa.forfait.nompack===con[j])
          });
          us[j]=l.length
         }
         
         var jso={}
         for(let j=0;j<con.length;j++){ 
          var o=[us[j]]
         jso[con[j]]=o
          };
          res.status(200).json(jso)
        
      } catch (error) {
        next(error);
      }
  };
