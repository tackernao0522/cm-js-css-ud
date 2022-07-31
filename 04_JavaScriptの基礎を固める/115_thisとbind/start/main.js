const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this); // obj

        window.setTimeout(function () {
            console.log(this); // window objectから{first_name: 'Takaki'}に変わる
        }.bind({first_name: 'Takaki'}));
    }
}

obj.printFullName();
