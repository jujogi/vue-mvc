export const add = (array, obj) => {
    return  [
        ...array,
        obj
    ];
}

export const edit = (array, obj) => {
    const objIndex = array.findIndex(objArray => objArray.id === obj.id);
    const updatedObj = array[objIndex];
    updatedObj.completed = !updatedObj.completed;

    return [
        ...array,
    ]
}

export const remove = (array, objId) => {
    return array.filter(objArray => objArray.id !== objId);
}