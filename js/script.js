const consoleText = (e, t, n = ["#fff"]) => {
  let o = 1,
    x = 1,
    l = !1,
    s = document.getElementById(t);
  (s.style.color = n[0]),
    setInterval(() => {
      0 === o && !l
        ? ((l = !0),
          (s.innerHTML = e[0].substring(0, o)),
          setTimeout(() => {
            n.push(n.shift()),
              e.push(e.shift()),
              (x = 1),
              (s.style.color = n[0]),
              (o += x),
              (l = !1);
          }, 1e3))
        : o === e[0].length + 1 && !l
        ? ((l = !0),
          setTimeout(() => {
            (x = -1), (o += x), (l = !1);
          }, 1800))
        : l || ((s.innerHTML = e[0].substring(0, o)), (o += x));
    }, 105);
  let i = !0;
  setInterval(() => {
    const e = document.getElementById("console");
    (e.className = i ? "console-underscore hidden" : "console-underscore"),
      (i = !i);
  }, 400);
};
consoleText(
  ["Hello!", "I'm Pedro Gonçalves and I'm a Junior Software Developer."],
  "text",
  ["white", "white", "white"]
)