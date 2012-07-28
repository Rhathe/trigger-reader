// Jasmine Specs for trigger-reader
// http://pivotal.github.com/jasmine/

describe("site", function() {
    it("site should have a name", function() {
        site = new Demo.Models.Site({ name: 'My Site Name'} );
        expect(site.get('name')).toEqual('My Site Name');
    });
    it("site should have a URL", function() {
        site = new Demo.Models.Site({ url: 'http://www.thehackerati.com'} );
        expect(site.get('url')).toEqual('http://www.thehackerati.com');
    });
});

describe("sections", function() {
    it("sections should contain one or more section", function() {
        sections = new Demo.Collections.Sections([
            { name: 'My Section Name 1', url:'http://www.thehackerati.com' },
            { name: 'My Section Name 2', url:'http://blog.thehackerati.com' },
            { name: 'My Section Name 3', url:'http://ci.thehackerati.com' }
        ]);
        expect(sections.at(0).get('name')).toEqual('My Section Name 1');
        expect(sections.at(0).get('url')).toEqual('http://www.thehackerati.com');
        expect(sections.at(1).get('name')).toEqual('My Section Name 2');
        expect(sections.at(1).get('url')).toEqual('http://blog.thehackerati.com');
    });
});

describe("section", function() {
    var section;

    beforeEach(function() {
        section = new Demo.Models.Section();
        section.set({
            name : 'My Section Name',
              url: 'http://www.thehackerati.com'
        });
    });

    it("section should have a name", function() {
        expect(section.get('name')).toEqual('My Section Name');
    });
    it("section should have a feed URL", function() {
        expect(section.get('url')).toEqual('http://www.thehackerati.com');
    });
});

describe("story", function() {
    var story;

    beforeEach(function() {
        story = new Demo.Models.Story();
        story.set({
               headline : 'My Headline',
                 byline : 'Author Name',
                   date : '07/27/2012',
            small_image : 'http://www.thehackerati.com/sm_logo.jpg',
            large_image : 'http://www.thehackerati.com/lg_logo.jpg',
                    url : 'http://www.thehackerati.com'
        });
    });

    it("story should have a headline", function() {
        expect(story.get('headline')).toEqual('My Headline');
    });
    it("story should have a byline", function() {
        expect(story.get('byline')).toEqual('Author Name');
    });
    it("story should have a date", function() {
        expect(story.get('date')).toEqual('07/27/2012');
    });
    it("story should have a small_image", function() {
        expect(story.get('small_image')).toEqual('http://www.thehackerati.com/sm_logo.jpg');
    });
    it("story should have a large_image", function() {
        expect(story.get('large_image')).toEqual('http://www.thehackerati.com/lg_logo.jpg');
    });
    it("story should have a URL", function() {
        expect(story.get('url')).toEqual('http://www.thehackerati.com');
    });
});

// TO DO: add a collection of stories to a section
