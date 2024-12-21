<button id="create-job-button">Create a new job</button>


  document.getElementById('create-job-button').onclick = function() {
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    const location = prompt("Enter Location");

    saveJobData(firstName, lastName, location);
  };

  function saveJobData(firstName, lastName, location) {
    const jobData = {
      title: `New Job for ${firstName} ${lastName}`,
      value: 1000,  
      currency: 'USD',
      person_name: `${firstName} ${lastName}`,
      location: location
    };

    fetch('https://api.pipedrive.com/v1/deals?api_token=b6317d90a4cca6ef8f66f41f4fef9ed27241dc85', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Job saved:', data);
        alert('Job saved to Pipedrive!');
      })
      .catch(error => {
        console.error('Error saving job:', error);
        alert('Error saving job!');
      });
  }
