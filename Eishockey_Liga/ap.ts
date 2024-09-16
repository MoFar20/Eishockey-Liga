document.getElementById('clubForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const clubName = (document.getElementById('clubName') as HTMLInputElement).value;
    const homeTown = (document.getElementById('homeTown') as HTMLInputElement).value;
    const yearFounded = (document.getElementById('yearFounded') as HTMLInputElement).value;
    const managingDirector = (document.getElementById('managingDirector') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const regionalAssociation = (document.getElementById('regionalAssociation') as HTMLInputElement).value;

    // Add to table
    const tableBody = document.querySelector('#clubTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${clubName}</td>
        <td>${homeTown}</td>
        <td>${yearFounded}</td>
        <td>${managingDirector}</td>
        <td>${regionalAssociation}</td>
    `;
    tableBody?.appendChild(newRow);

    // Clear form
    (document.getElementById('clubForm') as HTMLFormElement).reset();
});
