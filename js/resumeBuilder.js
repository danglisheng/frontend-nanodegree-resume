var $main = $("#main");
var bio = {
    name: "党黎圣",
    role: "前端开发工程师",
    contacts: {
        mobile: "13260010971",
        email: "3182466719@qq.com",
        github: "https://github.com/danglisheng",
        location: "北京"
    },
    welcomeMessage: "Hello",
    biopic: "./images/fry.jpg",
    skills: ["jQuery", "JavaScript", "CSS", "前端构建工具gulp"],
    display: function() {
        var $header = $("#header");
        var $topContacts = $("#topContacts");
				var $footerContacts=$("#footerContacts");
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $header.prepend(formattedRole);
        $header.prepend(formattedName);
       
        function addContact(wrapper) {
        wrapper.append(formattedMobile);
        wrapper.append(formattedEmail);
        wrapper.append(formattedGithub);
        wrapper.append(formattedLocation);
        }
        addContact($topContacts);
        addContact($footerContacts);
        $header.append(formattedWelcomeMsg);
        $header.append(formattedBioPic);

        $header.append(HTMLskillsStart);
        var $skillsSection = $("#skills");
        $.each(bio.skills, function(index, skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $skillsSection.append(formattedSkill);
        });
    }
};
bio.display();
var work = {
    jobs: [{
        employer: "山西格盟国际能源有限公司",
        title: "热工检修",
        location: "山西省朔州市",
        dates: "2015.07.01-2017.06.1"
    }],
    display: function() {
    		var $workExperience = $("#workExperience");
        work.jobs.forEach(function(job) {
            $workExperience.append(HTMLworkStart);
            var $workEntry = $(".work-entry:last");
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            $workEntry.append(formattedWorkEmployer + formattedWorkTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $workEntry.append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $workEntry.append(formattedWorkLocation);

        });
    }
};
work.display();
var education = {
    schools: [{
        name: "长沙理工大学",
        location: "湖南省长沙市",
        degree: "学士学位",
        majors: "测控技术与仪器",
        dates: "2010.09.01-2015.06.23"
    }],
    onlineCourses: [{
        title: "前端开发纳米学位",
        school: "优达学城",
        dates: "2018.3.21-",
        url: "https://www.udacity.com/"
    }],
    display: function() {
        var $education = $("#education");
        education.schools.forEach(function(school) {
            $education.append(HTMLschoolStart);
            var $educationEntry = $(".education-entry:last");
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $educationEntry.append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $educationEntry.append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $educationEntry.append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $educationEntry.append(formattedSchoolMajor);
        });
        education.onlineCourses.forEach(function(course) {
        	$education.append(HTMLschoolStart);
          var $educationEntry = $(".education-entry:last");
          $educationEntry.append(HTMLonlineClasses);
          var formattedOnlineTitle=HTMLonlineTitle.replace("%data%",course.title);
          var formattedOnlineSchool=HTMLonlineSchool.replace("%data%",course.school);
          $educationEntry.append(formattedOnlineTitle+formattedOnlineSchool);
          var formattedOnlineDates=HTMLonlineDates.replace("%data%",course.dates);
          $educationEntry.append(formattedOnlineDates);
          var formattedOnlineURL=HTMLonlineURL.replace("%data%",course.url);
          $educationEntry.append(formattedOnlineURL);
        });

    }
};
education.display();
var projects = {
    projects: [{
            title: "订阅阅读器",
            dates: "2018.04.22-2018.04.25",
            description: "点击页面左上角的汉堡菜单图标，会弹出信息源的列表，你可以选择你感兴趣的信息源。",
            images: ["./images/feed-reader.jpg"]
        },
        {
            title: "学生考勤表",
            dates: "2018.05.03-2018.05.03",
            description: "这是个考勤应用，复选框选中表示当日出勤，改变复选框的选中状态，缺勤天数和保存在本地存储的信息也会改变",
            images: ["./images/attendance.jpg"]
        }
    ]
};
projects.display = function() {
    var $projects = $("#projects");
    projects.projects.forEach(function(project) {
        $projects.append(HTMLprojectStart);
        var $projectEntry = $(".project-entry:last");
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $projectEntry.append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $projectEntry.append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $projectEntry.append(formattedProjectDescription);
        project.images.forEach(function() {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
            $projectEntry.append(formattedProjectImage);
        });

    });
}
projects.display();

$("#mapDiv").append(googleMap);