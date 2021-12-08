function Pribor(name, ein, st, roz){
  //pribor("Имя прибора", "есть/нет", сила тока в Амперах, "да/нет")
  this.name = name;
  //параметр, определяющий возможность подключения к интернету:
  this.e_in = ein;
  //Напряжение: 
  this.V = 220;
  //Сила тока:
  this.I = st;
  //параметр, определяющий включен ли прибор в розетку:
  this.roz = roz;
  
}
  //Потребляемая мощность, через prototype (P = I x V):
Pribor.prototype.P = function(){
    if (this.roz == "да"){
      console.log(`Потребляемая мощность прибора ${this.name} составляет ${this.I * this.V} Вт, подключение к интернету ${this.e_in}!`);
    }
    else{
      console.log(`Потребляемая мощность прибора ${this.name} составляет 0 Вт, т.к. прибор не подключен к сети, подключение к интернету ${this.e_in}!`);
    }
  }

const lampa = new Pribor("лампа", "нет", 0.23, "да");
const nout = new Pribor("ноутбук", "есть", 1.2, "нет");
const tv = new Pribor("телевизор", "нет", 3, "да");


lampa.P()
nout.P()
tv.P()