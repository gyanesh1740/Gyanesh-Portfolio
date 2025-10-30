// Sidebar section navigation
document.querySelectorAll('.side-btn').forEach(btn => {
  btn.onclick = (e) => {
    document.querySelectorAll('.side-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    let tab = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab-section').forEach(sec=>{
      sec.classList.remove('show-section');
      if(sec.id === tab) sec.classList.add('show-section');
    });
    window.scrollTo({top:0}); // Optional: Auto-scroll to top on tab change
  };
});

// Tab-menu switching in educations
document.querySelectorAll('.tab-link').forEach(tabBtn => {
  tabBtn.onclick = () => {
    document.querySelectorAll('.tab-link').forEach(b=>b.classList.remove('tab-active'));
    tabBtn.classList.add('tab-active');
    let tabTarget = tabBtn.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('show-tab');
      if(tab.classList.contains('tab-'+tabTarget)) tab.classList.add('show-tab');
    });
  };
});

// Tab-menu switching in skills
document.querySelectorAll('.tab-link').forEach(tabBtn => {
  tabBtn.onclick = () => {
    document.querySelectorAll('.tab-link').forEach(b=>b.classList.remove('tab-active'));
    tabBtn.classList.add('tab-active');
    let tabTarget = tabBtn.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('show-tab');
      if(tab.classList.contains('tab-'+tabTarget)) tab.classList.add('show-tab');
    });
  };
});

// Multi-tabs for projects
document.querySelectorAll('.multi-tab-link').forEach(tabBtn => {
  tabBtn.onclick = () => {
    document.querySelectorAll('.multi-tab-link').forEach(b=>b.classList.remove('mt-active'));
    tabBtn.classList.add('mt-active');
    let tabTarget = tabBtn.getAttribute('data-tab');
    document.querySelectorAll('.multi-tab-content').forEach(tab => {
      tab.classList.remove('mt-show');
      if(tab.classList.contains('mt-'+tabTarget)) tab.classList.add('mt-show');
    });
  };
});
