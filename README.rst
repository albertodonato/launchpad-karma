launchpad-karma
===============

A simple script to track your `Launchpad karma
<https://help.launchpad.net/YourAccount/Karma>`_ over time.

It's meant to be run on a daily basis (usually by ``cron``).  At every
run, it collects the karma for the current day and stores it in an
SQLite database. Then it regenerates an HTML page with graphs (along
with related JavaScript and css files) in the specified target
directory.

Installing
----------

1. get the source tree::

     $ git clone https://bitbucket.org/ack/launchpad-karma.git

2. install the following dependencies:

   - Jinja2
   - launchpadlib

   This can be done via disto packages or with ``pip``::

     $ cd launchpad-karma
     $ pip install -R requirements.txt


Setting it up
-------------


2. edit ``launchpad-karma.ini``, setting the ``user`` key to your
   launchpad username.  The target directory for graphs and and the
   (maximum) number of months to plot can also be changed.


3. edit your crontab::

     $ crontab -e

   by adding something like this (which makes the script run at 1am each day)::

     # m h  dom mon dow   command
     0 1 * * * /home/ack/launchpad-karma/launchpad-karma
