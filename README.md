trigger-reader
===================

Trigger.io sample application built from this description: http://trigger.io/cross-platform-application-development-blog/2012/03/02/how-to-build-fast-html5-mobile-apps-using-backbone-js-zepto-js-and-trigger-io/, modified to read The Huffington Post JSON APIs.

Third-Party Software
--------------------

* trigger.io
* backbone.js
* zepto.js
* underscore.js
* Jasmine

Install Trigger.io
------------------

Download and install the toolkit from here: https://trigger.io/forge/toolkit/

Get the Code
------------

    % git clone https://github.com/thehackerati/trigger-reader.git

Build It
--------

    % forge build

Test It
-------

Open SpecRunner.html in a browser to run the Jasmine unit tests.

Run It
------

To launch the app in the iOS Simulator (requires iOS Simulator):

    $ forge run ios

To launch the app in the Android Simulator (requires Android Simulator):

    $ forge run android

To launch the app in the default browser (requires Node.js):

    $ forge run web

Reload It
---------

Push code updates to devices without going through an app review process. This is in alpha in Trigger.io. Basic testing worked but waiting for release to document how to initiate a push.
