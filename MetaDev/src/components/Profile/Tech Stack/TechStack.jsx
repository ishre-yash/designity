import React, { useState } from "react";

export default function TechStack() {
  const [preferredSkills, setPreferredSkills] = useState([
    {
      name: "Python",
      category: "Programming Languages",
      logo: "https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png",
    },
    {
      name: "Java",
      category: "Programming Languages",
      logo: "https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg",
    },
    {
      name: "JavaScript",
      category: "Programming Languages",
      logo: "https://flyclipart.com/thumb2/restaurant-site-892779.png",
    },
    {
      name: "Swift",
      category: "Programming Languages",
      logo: "https://developer.apple.com/swift/images/swift-og.png",
    },
    {
      name: "Kotlin",
      category: "Programming Languages",
      logo: "https://marvel-b1-cdn.bc0a.com/f00000000156946/www.jrebel.com/sites/default/files/image/2019-11/image-blog-jvm-languages-report-extended-interview-with-kotlin-creator-andrey-breslav.jpg",
    },
    {
      name: "GraphQL",
      category: "Programming Languages",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    },
    {
      name: "Ruby",
      category: "Programming Languages",
      logo: "https://w7.pngwing.com/pngs/535/618/png-transparent-ruby-on-rails-computer-programming-programming-language-ruby-angle-rectangle-logo.png",
    },
    {
      name: "Go",
      category: "Programming Languages",
      logo: "https://e7.pngegg.com/pngimages/762/331/png-clipart-go-programming-language-computer-programming-programmer-programming-language-miscellaneous-computer-program.png",
    },
    {
      name: "Objective-C",
      category: "Programming Languages",
      logo: "https://ih1.redbubble.net/image.804118633.0559/st,small,507x507-pad,600x600,f8f8f8.u3.jpg",
    },
    {
      name: "PHP",
      category: "Programming Languages",
      logo: "https://mpng.subpng.com/20180427/zaq/kisspng-web-development-php-programming-language-computer-5ae381e5d40ec8.1931377315248593658686.jpg",
    },
    {
      name: "TypeScript",
      category: "Programming Languages",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
      name: "Dart",
      category: "Programming Languages",
      logo: "https://www.kindpng.com/picc/m/176-1766554_dart-programming-language-logo-hd-png-download.png",
    },
    {
      name: "C",
      category: "Programming Languages",
      logo: "https://www.clipartmax.com/png/middle/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png",
    },
    {
      name: "C++",
      category: "Programming Languages",
      logo: "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    },
    {
      name: "Ruby on Rails",
      category: "Frameworks & Libraries ",
      logo: "https://w7.pngwing.com/pngs/782/228/png-transparent-ruby-on-rails-rubygems-amazon-dynamodb-ruby-text-logo-ruby-thumbnail.png",
    },
    {
      name: "Redux",
      category: "Frameworks & Libraries ",
      logo: "https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg",
    },
    {
      name: "React",
      category: "Frameworks & Libraries ",
      logo: "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    },
    {
      name: "Next.js",
      category: "Frameworks & Libraries ",
      logo: "https://iconape.com/wp-content/png_logo_vector/next-js.png",
    },
    {
      name: "Node.js",
      category: "Frameworks & Libraries ",
      logo: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png",
    },
    {
      name: "Angular",
      category: "Frameworks & Libraries ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    },
    {
      name: "AngularJS",
      category: "Frameworks & Libraries ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    },
    {
      name: "Meteor",
      category: "Frameworks & Libraries ",
      logo: "https://w7.pngwing.com/pngs/528/305/png-transparent-meteor-react-others-angle-text-logo-thumbnail.png",
    },
    {
      name: "D3.js",
      category: "Frameworks & Libraries ",
      logo: "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png",
    },
    {
      name: "Vue.js",
      category: "Frameworks & Libraries ",
      logo: "https://vuejs.org/images/logo.png",
    },
    {
      name: "Svelte",
      category: "Frameworks & Libraries ",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShunseUFTrtQBlcHnzWB7zZLHbQe1HlDn3ad8zBuTe2DDWPjqR210sXUmoJh6iL00eGpU&usqp=CAU",
    },
    {
      name: "Ember.js",
      category: "Frameworks & Libraries ",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW_uKV0PxbHJkQlvW65Ci-bamlciodtYY8xWTMwh3uH99rKUt-lIa9Fxti0sXq_9FIqE&usqp=CAU",
    },
    {
      name: "Backbone.js",
      category: "Frameworks & Libraries ",
      logo: "https://www.pinpng.com/pngs/m/683-6833883_backbone-js-logo-backbone-js-logo-png-transparent.png",
    },
    {
      name: "Express.js",
      category: "Frameworks & Libraries ",
      logo: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png",
    },
    {
      name: "jQuery",
      category: "Frameworks & Libraries ",
      logo: "https://e7.pngegg.com/pngimages/662/163/png-clipart-jquery-logo-web-development-jquery-ui-javascript-computer-icons-jqlogo-emblem-label.png",
    },
    {
      name: "Polymer",
      category: "Frameworks & Libraries ",
      logo: "https://cdn.worldvectorlogo.com/logos/polymer.svg",
    },
    {
      name: "Laravel",
      category: "Frameworks & Libraries ",
      logo: "https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg",
    },
    {
      name: "Django",
      category: "Frameworks & Libraries ",
      logo: "https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg",
    },
    {
      name: "Spring Framework",
      category: "Frameworks & Libraries ",
      logo: "https://springframework.guru/wp-content/uploads/2015/02/spring-framework-project-logo.png",
    },
    {
      name: "Socket.IO",
      category: "Frameworks & Libraries ",
      logo: "https://img.favpng.com/13/10/5/socket-io-node-js-javascript-network-socket-websocket-png-favpng-VqzQCwfrdxSAarJwqLSz2R0ky.jpg",
    },
    {
      name: "React Native",
      category: "Frameworks & Libraries ",
      logo: "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    },
    {
      name: "Ionic",
      category: "Frameworks & Libraries ",
      logo: "https://www.seekpng.com/png/small/385-3852777_ionic-icon-png.png",
    },
    {
      name: "CakePHP",
      category: "Frameworks & Libraries ",
      logo: "https://pngimage.net/wp-content/uploads/2018/05/cakephp-logo-png.png",
    },
    {
      name: "Flutter",
      category: "Frameworks & Libraries ",
      logo: "https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png",
    },
    {
      name: "Apache Cordova",
      category: "Frameworks & Libraries ",
      logo: "https://w7.pngwing.com/pngs/976/24/png-transparent-apache-cordova-android-logo-android.png",
    },
    {
      name: "Electron",
      category: "Frameworks & Libraries ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png",
    },
    {
      name: "Jest",
      category: "Frameworks & Libraries ",
      logo: "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
    },
    {
      name: "Android Studio",
      category: "IDE",
      logo: "https://cdn.icon-icons.com/icons2/3053/PNG/512/android_studio_alt_macos_bigsur_icon_190395.png",
    },
    {
      name: "Xcode",
      category: "IDE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sYuzSOcsbb3BC5-9o5dTRWBfT3mqZ0aH9w&usqp=CAU",
    },
    {
      name: "gRPC",
      category: "Remote Procedure Call",
      logo: "https://avatars.githubusercontent.com/u/7802525?v=4&s=400",
    },
    {
      name: "Neo4j",
      category: "Databases",
      logo: "https://neo4j.com/wp-content/themes/neo4jweb/v2-templates/brand/assets/neo4j-icon-color.png",
    },
    {
      name: "MySQL",
      category: "Databases",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHTH0-YB93_0OrDKpEb2SQ9vJELARL7tnKfkseiySdISFT0vhVTCLGNiYfmPR_TuJacU&usqp=CAU",
    },
    {
      name: "MongoDB",
      category: "Databases",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png",
    },
    {
      name: "Cassandra",
      category: "Databases",
      logo: "https://download.logo.wine/logo/Apache_Cassandra/Apache_Cassandra-Logo.wine.png",
    },
    {
      name: "PostgreSQL",
      category: "Databases",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsv8WIkrdaYIckq5ZmTD0r9e2_XA7mmJqjV5FZwlpj_xWKREBe82_gBuxwpZjN-rG43r8&usqp=CAU",
    },
    {
      name: "Redis",
      category: "Databases",
      logo: "https://w7.pngwing.com/pngs/540/594/png-transparent-redis-distributed-cache-go-database-caching-github-data-structure-redis-cache.png",
    },
    {
      name: "DocumentDB",
      category: "Databases",
      logo: "https://images.velog.io/images/hadmarine/post/b0f612a0-6120-474f-b0f0-0773a6becd45/20190117-connect-to-documentdb-1.png",
    },
    {
      name: "HBase",
      category: "Databases",
      logo: "https://w7.pngwing.com/pngs/344/678/png-transparent-apache-hbase-apache-hadoop-nosql-apache-http-server-bigtable-killer-whale-miscellaneous-marine-mammal-mammal.png",
    },
    {
      name: "RocksDB",
      category: "Databases",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsLXzUgrx43E6sLLxISVFUpa7fK0a3E5CB1FEuJz4poC31rH96HEUN5r7u22pM1pGZUY&usqp=CAU",
    },
    {
      name: "Amazon DynamoDB",
      category: "Databases",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/DynamoDB.png/220px-DynamoDB.png",
    },
    {
      name: "Riak",
      category: "Databases",
      logo: "https://dbdb.io/media/logos/riak.png",
    },
    {
      name: "Google Cloud Datastore",
      category: "Databases",
      logo: "https://www.turbogeek.co.uk/wp-content/uploads/2019/02/cloud_datastore.png",
    },
    {
      name: "NGINX",
      category: "Web Servers",
      logo: "https://w7.pngwing.com/pngs/262/242/png-transparent-nginx-phusion-passenger-application-software-proxy-server-reverse-proxy-creativo-logo-de-marca-angle-text-trademark.png",
    },
    {
      name: "Amazon S3",
      category: "Cloud Computing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png",
    },
    {
      name: "Amazon EC2",
      category: "Cloud Computing",
      logo: "https://i.pinimg.com/originals/58/b5/48/58b5486d603986fa563abcfbf034a8c2.png",
    },
    {
      name: "Amazon RDS",
      category: "Cloud Computing",
      logo: "https://www.thorntech.com/wp-content/uploads/2018/01/AWS_Simple_Icons_Database_AmazonRDS-3.png",
    },
    {
      name: "Amazon EMR",
      category: "Cloud Computing",
      logo: "https://d39kqat1wpn1o5.cloudfront.net/app/uploads/2019/07/amazon-emrfav.png",
    },
    {
      name: "Amazon SES",
      category: "Cloud Computing",
      logo: "https://www.netreo.com/wp-content/uploads/amazon-ses1-2.png",
    },
    {
      name: "Amazon EBS",
      category: "Cloud Computing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/AWS_Simple_Icons_Storage_Amazon_EBS.svg/1024px-AWS_Simple_Icons_Storage_Amazon_EBS.svg.png",
    },
    {
      name: "Amazon ElastiCache",
      category: "Cloud Computing",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLlCIIuv5wGk82_Ch3CEJ8Wd6wRGn0tRi6a7x78jmAgYTDePszH3kuwGJkBmf9qSDQOU&usqp=CAU",
    },
    {
      name: "Amazon CloudFront",
      category: "Cloud Computing",
      logo: "https://www.shareicon.net/data/2015/08/28/92179_content_512x512.png",
    },
    {
      name: "Amazon VPC",
      category: "Cloud Computing",
      logo: "https://iconape.com/wp-content/png_logo_vector/aws-vpc.png",
    },
    {
      name: "AWS Lambda",
      category: "Cloud Computing",
      logo: "https://logowik.com/content/uploads/images/aws-lambda2296.jpg",
    },
    {
      name: "Amazon SNS",
      category: "Cloud Computing",
      logo: "https://www.pngfind.com/pngs/m/73-731573_aws-sns-logo-png-transparent-amazon-sns-logo.png",
    },
    {
      name: "Amazon SQS",
      category: "Cloud Computing",
      logo: "https://p1.hiclipart.com/preview/869/117/82/amazon-logo-amazon-simple-queue-service-amazon-web-services-aws-lambda-message-queuing-service-amazon-simple-notification-service-serverless-computing-message-queue-png-clipart.jpg",
    },
    {
      name: "Amazon Route 53",
      category: "Cloud Computing",
      logo: "https://ih1.redbubble.net/image.532705314.2056/raf,750x1000,075,t,FFFFFF:97ab1c12de.u3.jpg",
    },
    {
      name: "Google App Engine",
      category: "Cloud Computing",
      logo: "https://sdtimes.com/wp-content/uploads/2018/08/1_VHYGqjhONSJ20pRlIUbg7w.png",
    },
    {
      name: "Google Compute Engine",
      category: "Cloud Computing",
      logo: "https://media.datacenterdynamics.com/media/images/Google_Compute_Engine_logo2.width-358.png",
    },
  ]);

  const categories = [
    "Programming Languages",
    "Frameworks & Libraries ",
    "IDE",
    "Remote Procedure Call",
    "Databases",
    "Web Servers",
    "Cloud Computing",
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "")
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, "i");

      preferredSkills.forEach((role) => {
        if (regex.test(role.name)) autocompleteData.push(role);
      });

      setAutocomplete({
        disabled: false,
        data: [...autocompleteData],
      });
    }
  };

  const updateSelectedSkills = (item) => {
    const newSkill = {
      name: item.name,
      yoe: 0,
      featured: 0,
      category: item.category,
      logo: item.logo,
    };
    selectedSkills.push(newSkill);

    setInputValue("");
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  const removeSelectedSkill = (index) => {
    const data = [...selectedSkills];
    if (data[index].featured) setFeaturedCount((prev) => prev - 1);
    data.splice(index, 1);
    setSelectedSkills(data);
  };

  const [featuredCount, setFeaturedCount] = useState(0);

  const changeFeature = (index) => {
    const data = [...selectedSkills];

    if (data[index].featured == 0) setFeaturedCount(featuredCount + 1);
    else setFeaturedCount(featuredCount - 1);

    data[index].featured = 1 - data[index].featured;

    setSelectedSkills(data);
  };

  const handleYOEChange = (val, index) => {
    const data = [...selectedSkills];
    data[index].yoe = val;
    setSelectedSkills(data);
  };

  const [showYOEInput, setShowYOEInput] = useState(false);
  const [showYOEInputIndex, setShowYOEInputIndex] = useState();
  const handleYOEInputClick = (index) => {
    setShowYOEInput(true);
    setShowYOEInputIndex(index);
  };

  const handleModalCloseClick = () => {
    setShowModal(false);
    setShowYOEInput(false);
  };

  return (
    <>
      <div
        className="  h-[fit-content] border-[1.5px] border-[#d9d9d9] 
        rounded-[9px] w-[full] py-6 px-7 flex flex-col gap-7 m-auto bg-white font-inter my-[1rem] "
      >
        <div className="flex justify-between w-full items-center ">
          <p className="uppercase font-medium">Tech Stack</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-100 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#A9AAAA"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>

        <div className="w-full " style={{ alignContent: "flex-start" }}>
          {selectedSkills.length === 0 ? (
            <>
              <div className="pt-8 px-4 text-center">
                <p className="font-medium">Add your familiar Tech Stacks</p>
                <p className="mt-3 text-sm text-gray-900 font-normal">
                  Showcase your familiar skills and technologies and label them
                  by years of experience so others know what you like working
                  with.
                </p>
                <button
                  type="button"
                  className="bg-sky-500 mt-5 hover:opacity-80 rounded-full text-white font-inter text-[14px] py-2 px-4 md:ml-4 hover:bg-sky-700 duration-500"
                  onClick={() => setShowModal(true)}
                >
                  Add Tech Stack
                </button>
              </div>
            </>
          ) : (
            <>
              <div
                className="w-full flex flex-wrap max-h-[300px] overflow-y-auto "
                style={{ alignContent: "flex-start" }}
              >
                {featuredCount > 0 ? (
                  <div className="mb-[20px] w-[50%]">
                    <div className="flex flex-between">
                      <h1 className="tech-stack-section-head  ">Featured</h1>
                      <div className="text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          className="ml-[5px] text-[14px]"
                          fill="currentColor"
                        >
                          <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" />
                        </svg>
                      </div>
                    </div>

                    {selectedSkills.map((skill, index) => {
                      if (skill.featured) {
                        console.log(skill);
                        return (
                          <div key={index} className="flex w-[fit-content] ">
                            <div className="tech-stack-skill-name justify-center items-center flex mb-[15px]">
                              <img
                                className="tech-stack-logo"
                                alt="image"
                                src={skill.logo}
                              />
                              {skill.name}
                            </div>
                            <p className="tech-stack-yoe">{skill.yoe} yrs</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  <></>
                )}

                {categories.map((cat, index) => {
                  let flag = 0;
                  {
                    selectedSkills.map((skill, index) => {
                      if (!skill.featured && skill.category === cat) {
                        flag = 1;
                      }
                    });
                  }
                  if (flag) {
                    return (
                      <div className="mb-[20px] w-[50%]">
                        <h1 className="tech-stack-section-head">{cat}</h1>
                        {selectedSkills.map((skill, index) => {
                          if (!skill.featured && skill.category === cat) {
                            return (
                              <div
                                key={index}
                                className="flex w-[fit-content] "
                              >
                                <div className="tech-stack-skill-name justify-center items-center flex mb-[15px]">
                                  <img
                                    className="tech-stack-logo"
                                    alt="image"
                                    src={skill.logo}
                                  />
                                  {skill.name}
                                </div>
                                <p className="tech-stack-yoe">
                                  {skill.yoe} yrs
                                </p>
                              </div>
                            );
                          }
                        })}
                      </div>
                    );
                  }
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {showModal ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay font-inter">
            <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black">
              <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] min-h-[60px] rounded-b-sm my-auto">
                <h3 className="text-[14px] font-semibold">Tech Stack</h3>
                <button
                  type="button"
                  className="h-10 w-10 flex items-center justify-center rounded-full p-1 mt-2 mr-[-8px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#808080]"
                    onClick={handleModalCloseClick}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-[20px] mt-3 h-full flex flex-col justify-start max-h-[490px] ">
                <div>
                  <input
                    className="w-[318px] mb-3 tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[40px]"
                    type="text"
                    value={inputValue}
                    onChange={handleInputValueChange}
                    placeholder="Search skills and technologies"
                  />
                  <div
                    className={`${
                      autocomplete.disabled ? "hidden" : ""
                    } ml-[0.5rem] w-[90%] absolute z-10 border rounded-md  py-1 bg-white
                           max-h-60 overflow-y-scroll`}
                  >
                    {autocomplete.data.map((item, index) => (
                      <div
                        key={index}
                        className="autocomplete-options "
                        onClick={() => updateSelectedSkills(item)}
                      >
                        <img
                          className="tech-stack-logo"
                          alt="image"
                          src={item.logo}
                        />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-[2px] w-full h-[85%] py-[20px] px-[10px] overflow-y-auto">
                  {selectedSkills.length === 0 && (
                    <div className="w-[fit-content] m-auto mt-[30px] text-[15px] font-semibold">
                      {" "}
                      Add your tech stack{" "}
                    </div>
                  )}

                  {featuredCount > 0 ? (
                    <div className="mb-[20px] ">
                      <div className="flex flex-between">
                        <h1 className="tech-stack-section-head ">Featured</h1>
                        <div className="text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="ml-[5px] text-[14px]"
                            fill="currentColor"
                          >
                            <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" />
                          </svg>
                        </div>
                      </div>

                      {selectedSkills.map((skill, index) => {
                        if (skill.featured) {
                          return (
                            <div
                              key={index}
                              className="flex px-[16px] py-[6px] justify-between items-center bg-[#F7F7F7] mb-[8px] rounded-[3px]  border-gray-400 font-[400] "
                            >
                              <div className="tech-stack-skill-name justify-center items-center flex">
                                <img
                                  className="tech-stack-logo"
                                  alt="image"
                                  src={skill.logo}
                                />
                                {skill.name}
                              </div>
                              <div className="w-[28%] flex justify-between items-center text-[12px]">
                                <div className="flex w-[65%] mr-[10px] text-right    ">
                                  {showYOEInput &&
                                  showYOEInputIndex === index ? (
                                    <input
                                      type="number"
                                      defaultValue={skill.yoe}
                                      className="w-[35px] pl-[5px] text-[12px] outline-none bg-gray-200 font-[500] text-[#929CAD] ml-[40px]"
                                      onChange={(e) =>
                                        handleYOEChange(e.target.value, index)
                                      }
                                      min="0"
                                    />
                                  ) : (
                                    <div
                                      className="cursor-pointer tech-stack-yoe w-full text-right  "
                                      onClick={() => handleYOEInputClick(index)}
                                    >
                                      {skill.yoe == 0
                                        ? "Select years"
                                        : `${skill.yoe} yrs`}
                                    </div>
                                  )}
                                </div>
                                <div
                                  className={`${
                                    skill.featured
                                      ? "text-blue-400"
                                      : "text-[#929CAD]"
                                  } mr-[5px] `}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="cursor-pointer"
                                    fill="currentColor"
                                    onClick={() => changeFeature(index)}
                                  >
                                    <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" />
                                  </svg>
                                </div>

                                <div className="text-[#929CAD]">
                                  <svg
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer"
                                    onClick={() => removeSelectedSkill(index)}
                                  >
                                    <path d="M6 7a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 1 1 2 0v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1z" />
                                    <path d="M10 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM14 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <></>
                  )}

                  {categories.map((cat, index) => {
                    let flag = 0;
                    {
                      selectedSkills.map((skill, index) => {
                        if (!skill.featured && skill.category === cat) {
                          flag = 1;
                        }
                      });
                    }
                    if (flag) {
                      return (
                        <div className="mb-[20px] ">
                          <h1 className="tech-stack-section-head">{cat}</h1>
                          {selectedSkills.map((skill, index) => {
                            if (!skill.featured && skill.category === cat) {
                              return (
                                <div
                                  key={index}
                                  className="flex px-[16px] py-[6px] justify-between items-center bg-[#F7F7F7] mb-[8px] rounded-[3px]  border-gray-400 font-[400] "
                                >
                                  <div className="tech-stack-skill-name justify-center items-center flex  my-auto">
                                    <img
                                      className="tech-stack-logo"
                                      src={skill.logo}
                                    />
                                    {skill.name}
                                  </div>
                                  <div className="w-[28%] flex justify-between items-center text-[12px]">
                                    <div className="flex w-[65%] mr-[10px] text-right    ">
                                      {showYOEInput &&
                                      showYOEInputIndex === index ? (
                                        <input
                                          type="number"
                                          defaultValue={skill.yoe}
                                          className="w-[35px] pl-[5px] text-[12px] outline-none bg-gray-200 font-[500] text-gray-500 ml-[40px]"
                                          onChange={(e) =>
                                            handleYOEChange(
                                              e.target.value,
                                              index
                                            )
                                          }
                                          min="0"
                                        />
                                      ) : (
                                        <div
                                          className="cursor-pointer tech-stack-yoe w-full text-right  "
                                          onClick={() =>
                                            handleYOEInputClick(index)
                                          }
                                        >
                                          {skill.yoe == 0
                                            ? "Select years"
                                            : `${skill.yoe} yrs`}
                                        </div>
                                      )}
                                    </div>
                                    <div
                                      className={`${
                                        skill.featured
                                          ? "text-blue-400"
                                          : "text-[#929CAD]"
                                      } mr-[5px] `}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        className="cursor-pointer"
                                        fill="currentColor"
                                        onClick={() => changeFeature(index)}
                                      >
                                        <path d="m4.178 20.801 6.758-4.91 6.756 4.91-2.58-7.946 6.758-4.91h-8.352L10.936 0 8.354 7.945H0l6.758 4.91-2.58 7.946z" />
                                      </svg>
                                    </div>

                                    <div className="text-[#929CAD]">
                                      <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="cursor-pointer"
                                        onClick={() =>
                                          removeSelectedSkill(index)
                                        }
                                      >
                                        <path d="M6 7a1 1 0 0 1 1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 1 1 2 0v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a1 1 0 0 1 1-1z" />
                                        <path d="M10 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM14 8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zM8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
