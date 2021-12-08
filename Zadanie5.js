class Pribor {
  //Напряжение: 
    V = 220;
}

class PriborInfo extends Pribor {

  constructor(name, ein, st, roz){
   super();
   this.name = name;
    //параметр, определяющий возможность подключения к интернету:
    this.e_in = ein;
    //Сила тока:
    this.I = st;
    //параметр, определяющий включен ли прибор в розетку:
    this.roz = roz;
  }

//Потребляемая мощность, через prototype (P = I x V):
P() {
  if (this.roz){
    console.log(`Потребляемая мощность прибора ${this.name} составляет ${this.I * this.V} Вт, подключение к интернету ${this.e_in}!`);
  }
  else{
    console.log(`Потребляемая мощность прибора ${this.name} составляет 0 Вт, т.к. прибор не подключен к сети, подключение к интернету ${this.e_in}!`);
    }
  }
}

const lampa = new PriborInfo("лампа", "нет", 0.23, "да");
const nout = new PriborInfo("ноутбук", "есть", 1.2);
const tv = new PriborInfo("телевизор", "нет", 3, "да");

lampa.P()
nout.P()
tv.P()