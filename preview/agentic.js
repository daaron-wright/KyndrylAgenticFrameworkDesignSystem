/* Agentic-primitive popover controller.
   Wires up .agentic triggers to their sibling .agentic-pop panels, handles
   destructive confirm steps, and shows the "learned from you" toast on
   teaching-signal actions. Shared by all primitive preview cards. */
(function () {
  const OPEN_ATTR = 'aria-expanded';
  let currentTrigger = null;

  function closeAll() {
    document.querySelectorAll('.agentic[aria-expanded="true"]').forEach((el) => {
      el.setAttribute(OPEN_ATTR, 'false');
      const pop = el.parentElement.querySelector('.agentic-pop');
      if (pop) pop.removeAttribute('data-open');
    });
    currentTrigger = null;
  }

  function openTrigger(trigger) {
    if (currentTrigger && currentTrigger !== trigger) closeAll();
    trigger.setAttribute(OPEN_ATTR, 'true');
    const pop = trigger.parentElement.querySelector('.agentic-pop');
    if (pop) {
      pop.setAttribute('data-open', 'true');
      // Reset any open confirm states
      pop.querySelectorAll('.ap-confirm').forEach((c) => (c.hidden = true));
      pop.querySelectorAll('.ap-actions').forEach((c) => (c.hidden = false));
    }
    currentTrigger = trigger;
  }

  function toast(msg) {
    let t = document.querySelector('.agentic-toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'agentic-toast';
      t.innerHTML =
        '<span class="at-dot"></span><span class="at-msg"></span>' +
        '<button type="button" data-act="undo">Undo</button>' +
        '<button type="button" data-act="inbox">View inbox</button>';
      document.body.appendChild(t);
      t.addEventListener('click', (e) => {
        const act = e.target.getAttribute && e.target.getAttribute('data-act');
        if (act) t.removeAttribute('data-show');
      });
    }
    t.querySelector('.at-msg').textContent = msg;
    t.setAttribute('data-show', 'true');
    clearTimeout(t._hideT);
    t._hideT = setTimeout(() => t.removeAttribute('data-show'), 3800);
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.agentic');
    if (trigger) {
      e.preventDefault();
      const open = trigger.getAttribute(OPEN_ATTR) === 'true';
      if (open) closeAll();
      else openTrigger(trigger);
      return;
    }
    // action inside popover
    const action = e.target.closest('.ap-action');
    if (action) {
      const destructive = action.classList.contains('is-destructive');
      const pop = action.closest('.agentic-pop');
      if (destructive) {
        const confirm = pop.querySelector('.ap-confirm[data-for="' + action.dataset.act + '"]');
        if (confirm) {
          pop.querySelectorAll('.ap-actions').forEach((c) => (c.hidden = true));
          confirm.hidden = false;
          return;
        }
      }
      const label = action.dataset.toast || action.textContent.trim().split('\n')[0];
      closeAll();
      toast(label);
      return;
    }
    // confirm buttons
    const confirmBtn = e.target.closest('.ap-confirm button');
    if (confirmBtn) {
      const isPrimary = confirmBtn.classList.contains('ap-primary');
      const pop = confirmBtn.closest('.agentic-pop');
      closeAll();
      if (isPrimary) {
        toast(confirmBtn.dataset.toast || 'Taught the agent · added to inbox');
      }
      return;
    }
    // outside click closes
    if (currentTrigger && !e.target.closest('.agentic-pop')) closeAll();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
})();
