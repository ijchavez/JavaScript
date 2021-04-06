for(let contador = 0, condicion = 10; contador <= condicion; contador++){
    if (contador % 2 == 0){
        console.log(contador)
        continue;
    }

}
// OTRA FORMA, la expuesta en el curso
for(let contador = 0, condicion = 10; contador <= condicion; contador++){
    if (contador % 2 !== 0){
        continue;

    }else{
        console.log(contador)

    }

}