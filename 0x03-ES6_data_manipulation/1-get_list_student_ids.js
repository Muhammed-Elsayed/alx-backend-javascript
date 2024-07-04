/* eslint-disable */
export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map(function(obj){
      return obj.id
    });
  }
  return [];
}