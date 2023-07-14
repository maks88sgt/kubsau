export const getAttestation = (grade) =>{
    switch (grade){
        case 2:
            return "Неудовлетворительно";
        case 3:
            return "Удовлетворительно";
        case 4:
            return "Хорошо";
        case 5:
            return "Отлично";
        default:
            return "Не явился"
    }
}
