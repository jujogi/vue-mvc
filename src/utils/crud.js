export const add = (array, obj) => {
    return  [
        ...array,
        obj
    ];
}

export const edit = (array, obj) => {
    return array.map(objArray => {
        return objArray === obj.id ? obj : objArray;
    });
}

export const remove = (array, objId) => {
    return array.filter(objArray => objArray.id !== objId);
}