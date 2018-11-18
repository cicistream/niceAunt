const global = {
  initAge: function (str) {
    var r = String(str).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    if (
      d.getFullYear() == r[1] &&
      d.getMonth() + 1 == r[3] &&
      d.getDate() == r[4]
    ) {
      var Y = new Date().getFullYear();
      return Y - r[1];
    }
    return "输入的日期格式错误！";
  },
};
export default global;
