function f3(){
    const cars = [
        {model: 'i20', company:'Hyundai', price:'7.5'},
        {model: 'fabia', company:'skoda', price:'6.5'},
        {model: 'x5', company:'BMW', price:'40'},
        {model: 'Range Rover Discovery', company:'Range Rover', price:'86'},
    ]


    const car1 = cars.map((car) => {
      return {model: car.model,company: car.company}
    })
    console.log(car1);

   const car3 = cars.filter(car => car.price<10);
   console.log(car3);

   const car4 = cars.filter( car => car.price>10).map(car => {
    return{model:car.model,company:car.company}});
  console.log(car4);
}
f3();
