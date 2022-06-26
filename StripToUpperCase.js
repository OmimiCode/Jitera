const ourVision = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];
const StripToUpperCase = (query) => {
  return query
    .toString()
    .replaceAll("$", "")
    .replaceAll(",", " ")
    .toUpperCase();
};

console.log(StripToUpperCase(ourVision));
