class Recipe {
    constructor(data) {
        this.ingredients = [];
        this.measure = [];
        data.forEach((elem) => {
            this.name = elem.strMeal;
            for(let i=1; i<=20; i++){
                let x = 'strIngredient'+i;
                let y = 'strMeasure'+i
                if(elem[x] !== "" && elem[y]!=="" && elem[x] !== null && elem[y]!==null && elem[x] !== " " && elem[y]!==" "){
                    this.ingredients.push(elem[x]);
                    this.measure.push(elem[y]);
                }
            }
        })
    }
}

export default Recipe;