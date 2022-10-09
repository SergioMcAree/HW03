const styles = ["Джаз", "Блюз"];

document.write(styles.join(" / "));

styles.push("Рок-н-Ролл");
document.write("<br><hr>" + styles.join(" / "));

styles.splice(Math.floor(styles.length / 2), 1, "Классика");
document.write("<br><hr>" + styles.join(" / "));

let stylesFirst = styles.shift()
document.write("<br><hr>" + stylesFirst);

styles.unshift("Рэп", "Регги");
document.write("<br><hr>" + styles.join(" / "));