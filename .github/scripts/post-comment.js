module.exports = async ({ github, context }) => {
  try {
    const fg = process.env.STATUS_FG;
    const cl = process.env.STATUS_CL;
    const tc = process.env.STATUS_TC;
    const t1 = process.env.STATUS_T1;
    const t2 = process.env.STATUS_T2;
    const t3 = process.env.STATUS_T3;
    const t4 = process.env.STATUS_T4;

    let score = 0.0;
    const fgText = fg === "pass" ? "✅ Válido" : "❌ Modificaciones no autorizadas";
    const clText = cl === "pass" ? "✅ Cumple Conventional Commits (+0.50)" : "⚠️ Commits genéricos (0.00)";
    const tcText = tc === "pass" ? "✅ 0 Errores de Compilación (+0.50)" : "❌ Errores en tsc (0.00)";
    const t1Text = t1 === "pass" ? "✅ Pasó (+1.00)" : "❌ Falló / Incompleto (0.00)";
    const t2Text = t2 === "pass" ? "✅ Pasó (+1.00)" : "❌ Falló / Incompleto (0.00)";
    const t3Text = t3 === "pass" ? "✅ Pasó (+1.00)" : "❌ Falló / Incompleto (0.00)";
    const t4Text = t4 === "pass" ? "✅ Pasó (+1.00)" : "❌ Falló / Incompleto (0.00)";

    if (fg === "pass") {
      if (cl === "pass") score += 0.50;
      if (tc === "pass") score += 0.50;
      if (t1 === "pass") score += 1.00;
      if (t2 === "pass") score += 1.00;
      if (t3 === "pass") score += 1.00;
      if (t4 === "pass") score += 1.00;
    }

    const prNumber = context.payload.pull_request
      ? context.payload.pull_request.number
      : context.issue.number;

    const authorLogin = context.payload.pull_request
      ? context.payload.pull_request.user.login
      : "estudiante";

    const body = `### 🎓 UETS Autograding Bot — Resultado de Evaluación Diagnóstica

Hola @${authorLogin}, tu entrega diagnóstica ha sido evaluada automáticamente:

| Verificación / Reto Evaluado | Estado | Puntaje Bloque A |
| :--- | :---: | :---: |
| 🛡️ **Integridad de Archivos (File Guard)** | ${fgText} | — |
| 📝 **Estándar de Commits (Conventional)** | ${clText} | ${cl === "pass" ? "0.50" : "0.00"} / 0.50 pts |
| 🔍 **Strict Check (\`tsc\`)** | ${tcText} | ${tc === "pass" ? "0.50" : "0.00"} / 0.50 pts |
| 🥊 **Reto 01:** Lógica & Java (CE1) | ${t1Text} | ${t1 === "pass" ? "1.00" : "0.00"} / 1.00 pts |
| 🥊 **Reto 02:** HTML5 & CSS3 (CE2) | ${t2Text} | ${t2 === "pass" ? "1.00" : "0.00"} / 1.00 pts |
| 🥊 **Reto 03:** JavaScript & DOM (CE3) | ${t3Text} | ${t3 === "pass" ? "1.00" : "0.00"} / 1.00 pts |
| 🥊 **Reto 04:** Depuración Triada (CE4) | ${t4Text} | ${t4 === "pass" ? "1.00" : "0.00"} / 1.00 pts |

---

### 🏆 Puntaje Preliminar Bloque A (Código en GitHub): **${score.toFixed(2)} / 5.00 Puntos**

> [!NOTE]
> Tu docente **Ing. Milton Velásquez** evaluará tu **Video Screencast (Bloque B - 5.00 pts)** enlazado en la descripción del PR para consolidar tu nota sobre **10.00 puntos**.`;

    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: prNumber,
      body: body,
    });
  } catch (err) {
    console.error("Error al publicar comentario:", err.message);
  }
};
