import './bootstrap.js';
import './styles/app.scss';

// loads the Bootstrap plugins
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/modal';
import 'jquery'
import $ from 'jquery';
// loads the code syntax highlighting library
import './js/highlight.js';

// Creates links to the Symfony documentation
import './js/doclinks.js';

// start the Stimulus application
import './bootstrap';

import './js/flatpicker';

import 'popper.js';

import moment from 'moment';

moment.locale("fr_FR");

$.getJSON("/api/user", user => {
    $("#userName").append(user.fullName);
    $("#userEmail").append(user.email);
});

$.getJSON("/api/profile", profile => {
    $("#userProfile").append(profile.title);
    $("#userDescription").append(profile.description);
    $("#userAddress").append(profile.address);
    $("#userPhone").append(profile.phone);
    $("#userAge").append(moment(profile.birthday).format("YYYY"));
    $("#userSocial").append(`
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.githubUrl}" rel="tooltip" title="Follow me on Github">
                            <i class="fa fa-github"></i>
                        </a>
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.linkedInUrl}" rel="tooltip" title="Follow me on LinkedIn">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.facebookUrl}" rel="tooltip" title="Follow me on Facebook">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.tweeterUrl}" rel="tooltip" title="Follow me on Twitter">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.googleUrl}" rel="tooltip" title="Follow me on Google+">
                            <i class="fa fa-google-plus"></i>
                        </a>
                        <a class="btn btn-default btn-round btn-lg btn-icon" href="${profile.instagramUrl}" rel="tooltip" title="Follow me on Instagram">
                            <i class="fa fa-instagram"></i>
                        </a>
            `);
});

$.getJSON("/api/skills", skills => {
    skills.forEach(skill => {
        $("#skills").append(`
                    <div class="col-md-4">
                        <div class="progress-container progress-primary"><span class="progress-badge">${skill.name}</span>
                            <div class="progress">
                                <div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${skill.level}0%;"></div><span class="progress-value">${skill.level}0%</span>
                            </div>
                        </div>
                    </div>
            `);
    });
})

$.getJSON("/api/experiences", experiences => {
    experiences.forEach(experience => {
        $("#userExperiences").append(`
<div class="card">
            <div class="row">
                <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div class="card-body cc-experience-header">
                        <p>${moment(experience.startedAt).format("YYYY")} - ${experience.endedAt === null ? "Now" : moment(experience.endedAt).format("YYYY")}</p>
                        <div class="h5">${experience.company}</div>
                    </div>
                </div>
                <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div class="card-body">
                        <div class="h5">${experience.title}</div>
                        <p>${experience.description}</p>
                    </div>
                </div>
            </div>
            </div>
            `);
    });
});

$.getJSON("/api/projects", projects => {
    projects.forEach(project => {
        $("#projects").append(`
                        <div class="col-md-6">
                            <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                <a href="#web-development">
                                    <figure class="cc-effect"><img src="${project.medias[0].path}" alt="Image" width="550" height="300"/>
                                        <figcaption>
                                            <div class="h4">${project.reference.title}</div>
                                            <p>${project.name}</p>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
            `);
    });
});

$.getJSON("/api/languages", languages => {

    var checkLevel1 = '';
    var checkLevel2 = '';
    var checkLevel3 = '';
    var checkLevel4 = '';
    var checkLevel5 = '';
    var checkLevel6 = '';
    languages.forEach(language => {
        $("#userLanguage").append(`
               <img src="portfolio/flags/country-flags/svg/${language.flag}.svg" alt="Country flag" style="width: 30px; height: 20px">
        `);
        if (language.level > 0) {
            checkLevel1 = 'checked';
        }
        if (language.level > 1) {
            checkLevel2 = 'checked';
        }
        if (language.level > 2) {
            checkLevel3 = 'checked';
        }
        if (language.level > 3) {
            checkLevel4 = 'checked';
        }
        if (language.level > 4) {
            checkLevel5 = 'checked';
        }
        if (language.level > 5) {
            checkLevel6 = 'checked';
        }

        $("#languages").append(`
               <div class="col-3">
                    <h6>${language.name}</h6>
                    <span class="fa fa-star fa-2x ${checkLevel1}"></span>
                    <span class="fa fa-star fa-2x ${checkLevel2}"></span>
                    <span class="fa fa-star fa-2x ${checkLevel3}"></span>
                    <span class="fa fa-star fa-2x ${checkLevel4}"></span>
                    <span class="fa fa-star fa-2x ${checkLevel5}"></span>
                    <span class="fa fa-star fa-2x ${checkLevel6}"></span>
                </div>
        `);
    });
});

$.getJSON("/api/hobbies", hobbies => {
    hobbies.forEach(hobby => {
        $("#hobbies").append(`
               <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class="fa servicesIcon ${hobby.icon}"></i>
                        <h4 class="card-title mt-3">${hobby.name}</h4>
                    </div>
                </div>
            </div>
        `);
    });
});

$.getJSON("/api/formations", formations => {
    formations.forEach(formation => {
        var level = 'High School';
        if (formation.gradeLevel > 0) {
            level = 'Bachelor\'s Degree';
        }
        if (formation.gradeLevel > 1) {
            level = 'Master\'s Degree';
        }
        $("#formations").append(`
        <div class="card">
            <div class="row">
                <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div class="card-body cc-education-header">
                        <p>${moment(formation.startedAt).format("YYYY")} - ${formation.endedAt === null ? "Now" : moment(formation.endedAt).format("YYYY")}</p>
                        <div class="h5">${level}</div>
                    </div>
                </div>
                <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div class="card-body">
                        <div class="h5">${formation.name}</div>
                        <p class="category">${formation.school}</p>
                        <p>${formation.description}</p>
                    </div>
                </div>
            </div>
        </div>
                    `);
    });
})

$.getJSON("/api/references", references => {
    references.forEach(reference => {
        $("#references").append(`
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-1">
                    <div class="card">
                        <div class="card-header">
                            <h4>${reference.title}</h4>
                            <span class="text-muted">${reference.company} - ${moment(reference.startedAt).format("YYYY")} - ${reference.endedAt === null ? "Aujourd'hui" : moment(reference.endedAt).format("YYYY")}</span>
                        </div>
                        <div class="card-body">
                            <p>${reference.description}</p>
                            ${reference.medias.map(media => `
                                <img src="${media.path}" width="100%" />
                            `)}
                        </div>
                    </div>
                </div>
            `);
    });
})


$("body").on("click", ".collection-item-delete", e => {
    $(e.currentTarget).closest("div").remove();
});

$("body").on("click", ".collection-add", e => {
    let collection = $(`#${e.currentTarget.dataset.collection}`);
    let prototype = collection.data('prototype');
    let index = collection.data('index');
    collection.append(prototype.replace(/__name__/g, index));
    collection.data('index', index++);
})

// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
    AOS.init( {
        // uncomment below for on-scroll animations to played only once
        // once: true
    }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
