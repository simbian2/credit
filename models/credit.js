const Sequelize = require('sequelize'); // class 

class credit extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER(70),
                primaryKey:true,
            },
            creditnumber:{
                type:Sequelize.INTEGER(30),
            },
            creditEndDate:{
                type:Sequelize.INTEGER(30),
            },
            creditPw:{
                type:Sequelize.INTEGER(30),
            },
            creditBirth:{
                type:Sequelize.INTEGER(30),
            },
            pay_method:{
                type:Sequelize.INTEGER(30),
            },
            assert:{
                type:Sequelize.INTEGER(100),
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User1',
            tableName:'credit',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}


module.exports = {
    credit,
}


