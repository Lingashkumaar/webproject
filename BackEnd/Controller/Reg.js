const {Reg} = require('../Schema/Regestion');


module.exports.insertdata = async(req,res) => {
    const Company = new Reg({

        // date:req.body.date,
        CompanyName:req.body.CompanyName,
        CompanyAdress:req.body.CompanyAddress,
        Email:req.body.Email,
        Cphone:req.body.Cphone,
        job:req.body.job,
        ffacultyName: req.body.ffacultyName,
        sfacultyName: req.body.sfacultyName,
        tfacultyName: req.body.tfacultyName, 
        fofacultyName: req.body.fofacultyName,
        fifacultyName: req.body.fifacultyName

    });
    const fcompany = await Reg.findOne({CompanyName:req.body.CompanyName});
    if(fcompany)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const companydata = await Company.save();
        console.log(companydata);
        res.send(companydata);
    }

};