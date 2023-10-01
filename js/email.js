document.addEventListener('DOMContentLoaded', function () {
            const emailLink = document.getElementById('emailLink');
            if (emailLink) {
                emailLink.addEventListener('click', function (event) {
                    event.preventDefault(); // 阻止默认的链接跳转行为

                    // 弹出SweetAlert2弹窗
                   Swal.fire({
  iconHtml: '<i class="fas fa-envelope"></i>',
  title: 'Email',
  text: 'floraennett4450@gmail.com',
  confirmButtonText: '确定',
  footer: '<a href="mailto:floraennett4450@gmail.com"><i class="fas fa-paper-plane"></i>快捷发送邮件</a>'
})

                });
            }
        });