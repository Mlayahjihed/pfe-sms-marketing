const contacts = require("../models/contact");
const User = require("../models/user");
const groupes = require("../models/groupe");
const Validatecontact = require("../validation/contact");
const Validategroupe = require("../validation/groupe");
const XLSX = require('xlsx');

exports.ajoutcon = async (req, res, next) => {
  const { errors, isValid } = Validatecontact(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else { 
      const query =await contacts.findOne({ user: req.user.id, telephone: req.body.telephone })
    if (query){
      res.status(404).json({ success: false, data: "telephone deja existe" });
}else{

      const user = await User.findOne({ _id: req.user.id })
      req.body.user = user._id
      await contacts.create(req.body);
      res.status(200).json({ success: true, data: "ajoueter" });
    }}
  } catch (error) {
    next(error);
  }
};
exports.allcon = async (req, res, next) => {
  try {
    const data = await contacts.find({ user: req.user.id }).populate('user')
    res.status(200).json(data)

  } catch (error) {
    next(error);
  }
};
exports.delcon = async (req, res, next) => {
  try {
    const data = await contacts.findOneAndRemove({ _id: req.params.id })
    res.status(200).json({ message: "suprimer" })

  } catch (error) {
    next(error);
  }

};
exports.upcon = async (req, res, next) => {
  const { errors, isValid } = Validatecontact(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {

      await contacts.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      ).then(result => {
        res.status(200).json(result)
      })
    }


  } catch (error) {
    next(error);
  }
};
exports.addcsv = async (req, res, next) => {
  try {

    const data = req.body;


    const x = data[0];
    for (let i = 0; i < x.length; i++) {
      x[i].user = req.user.id;
      s = x[i].telephone;
      const test = await contacts.findOne({ user : req.user.id ,telephone: s })
      if (!test) {
        await contacts.create(x[i]);
      }
    }
    res.status(200).json({ success: true, data: "ajoueter" });
  } catch (error) {
    next(error);
  }
};
exports.groupe = async (req, res, next) => {
  const { errors, isValid } = Validategroupe(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const query =await groupes.findOne({ user: req.user.id, nomgroupe: req.body.nomgroupe })
    if (query){
      res.status(404).json({ success: false, data: "nom groupe deja existe" });
}else{
      var ss = [];
      if ((req.body.region === undefined) && (req.body.sexe === undefined)) {
        const datas = await contacts.find({ user: req.user.id })
        ss = datas;
      } else {
        if ((req.body.region !== undefined) && (req.body.sexe !== undefined)) {
          const datas = await contacts.find({ user: req.user.id, region: req.body.region, sexe: req.body.sexe })
          ss = datas;
        } else {
          if ((req.body.region !== undefined)) {
            const datas = await contacts.find({ user: req.user.id, region: req.body.region })
            ss = datas;
          } else {
            if ((req.body.sexe !== undefined)) {
              const datas = await contacts.find({ user: req.user.id, sexe: req.body.sexe })
              ss = datas;
            }

          }
        }
      }

      const m = req.body.age.split(" ");
      var a = Number(m[0])
      var b = Number(m[1])
      const result = ss;
      const data = result.filter(da => {
        return (da.age >= a && da.age <= b)
      });
      let x = [];
      let y;
      for (let i = 0; i < data.length; i++) {
        y = data[i]
        x[i] = y.telephone;
      }
      req.body.user = req.user.id;
      req.body.list = x;
      await groupes.create(req.body);
      res.status(200).json({ success: true, data: "ajoueter" });


    }}
  } catch (error) {
    next(error);
  }
};
exports.allgr = async (req, res, next) => {
  try {
    const data = await groupes.find({ user: req.user.id })
    res.status(200).json(data)

  } catch (error) {
    next(error);
  }
};
exports.delgr = async (req, res, next) => {
  try {
    const data = await groupes.findOneAndRemove({ _id: req.params.id })
    res.status(200).json({ message: "suprimer" })

  } catch (error) {
    next(error);
  }

};
exports.upgr = async (req, res, next) => {
  try {
    const gr = await groupes.findOne({ _id: req.params.id })
    req.body = gr
    let ss = [];
    if ((req.body.region === "") && (req.body.sexe === "")) {
      const datas = await contacts.find({ user: req.user.id })
      ss = datas;
    } else {
      if ((req.body.region !== "") && (req.body.sexe !== "")) {
        const datas = await contacts.find({ user: req.user.id, region: req.body.region, sexe: req.body.sexe })
        ss = datas;
      } else {
        if ((req.body.region !== "")) {
          const datas = await contacts.find({ user: req.user.id, region: req.body.region })
          ss = datas;
        } else {
          if ((req.body.sexe !== "")) {
            const datas = await contacts.find({ user: req.user.id, sexe: req.body.sexe })
            ss = datas;
          }

        }
      }
    }
    const m = req.body.age.split(" ");
    var a = Number(m[0])
    var b = Number(m[1])
    const result = ss;
    const data = result.filter(da => {
      return (da.age >= a && da.age <= b)
    });
    let x = [];
    let y;
    for (let i = 0; i < data.length; i++) {
      y = data[i]
      x[i] = y.telephone;
    }
    req.body.list = x;
    await groupes.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).then(result => {
      res.status(200).json(result)
    })





  } catch (error) {
    next(error);
  }
};
