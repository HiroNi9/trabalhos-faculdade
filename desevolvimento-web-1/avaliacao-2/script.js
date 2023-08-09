   function validateForm() {
      var nome = document.getElementById("nome").value;
      var email = document.getElementById("email").value;
      var data = document.getElementById("data").value;
      var sexo = document.querySelector('input[name="sexo"]:checked');
      var estadoCivil = document.getElementsByName("estadoCivil")[0].value;
      var interesses = document.getElementsByName("interesse");
      var checkboxChecked = false;
      var isValid = true;
      var errorMessage = "";

      if (nome.length < 15) {
        errorMessage += "- O campo nome deve possuir no mínimo 15 caracteres.\n";
        isValid = false;
      }
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) || email.length < 10) {
        errorMessage += "- O campo e-mail deve ser preenchido corretamente com pelo menos 10 caracteres.\n";
        isValid = false;
      }
      var today = new Date();
      var inputDate = new Date(data);
      if (inputDate >= today) {
        errorMessage += "- A data de nascimento deve ser anterior à data atual.\n";
        isValid = false;
      }
      if (!sexo) {
        errorMessage += "- Selecione o sexo.\n";
        isValid = false;
      }
      if (estadoCivil === "solteiro" && calculateAge(inputDate) <= 15) {
        errorMessage += "- Para o estado civil solteiro(a), é necessário ter mais de 15 anos.\n";
        isValid = false;
      }
      for (var i = 0; i < interesses.length; i++) {
        if (interesses[i].checked) {
          checkboxChecked = true;
          break;
        }
      }
      if (!checkboxChecked) {
        errorMessage += "- Selecione pelo menos uma área de interesse.\n";
        isValid = false;
      }
      if (!isValid) {
        alert("Por favor, corrija os seguintes erros:\n\n" + errorMessage);
        return false;
      }
      alert("Dados enviados com sucesso!");
      return true;
    }
    function calculateAge(birthDate) {
      var today = new Date();
      var age = today.getFullYear() - birthDate.getFullYear();
      var monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }