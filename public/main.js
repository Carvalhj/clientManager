const context = {
    name: 'Productions arborescence',
    contactName: 'Mathieu Leblanc',
    contactMail: 'ml@productionsarborescence.com',
    projets: {
        name: 'Exobouch\u00E9es',
        description: 'Courtes capsules \u00E9ducatives',
        startDate: new Date ("2021-01-25")
    },
    clients: [
        {
            name: 'Productions arborescence',
            contactName: 'Mathieu Leblanc',
            contactMail: 'ml@productionsarborescence.com',
            projets: [{
                name: 'Exobouchées',
                description: 'Courtes capsules éducatives',
                startDate: new Date ("2021-01-25")
            }]
        },
        {
            name: 'Casadel Films',
            projets: [{
                name: 'Les herbres folles',
                description: 'Moyen métrage documentaire',
                startDate: new Date ("2021-03-10")
            }]
        },
        {
            name: 'Productions Epiphanie',
            projets: [{
                name: 'Plants and Animals',
                description: 'Vidéoclip',
                startDate: new Date ("2021-02-22")
            }]
        }
    ]
};

const handleBars = (source, target) => {
    const templateElement = document.getElementById(source);
    const templateSource = templateElement.innerHTML;
    const template = Handlebars.compile(templateSource);
    const compiledHtml = template(context);
    document.getElementById(target).innerHTML = compiledHtml;
};
handleBars('infoSource', 'information');
handleBars('sidebarSource', 'sidebar');

/*
const templateElement = document.getElementById("infoSource");
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById("information").innerHTML = compiledHtml;

const sidebarElement = document.getElementById("sidebarSource");
const sidebarSource = sidebarElement.innerHTML;
const generator = Handlebars.compile(sidebarSource);
const sidebarCompiledHtml = generator(context);
document.getElementById("sidebar").innerHTML = sidebarCompiledHtml;
*/