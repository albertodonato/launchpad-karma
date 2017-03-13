# launchpad-karma

A simple script to track
your [Launchpad karma](https://help.launchpad.net/YourAccount/Karma) over time.

It's meant to be run on a daily basis (usually by `cron`).  At every run, it
collects the karma for the current day and stores it in a SQLite database. Then
it regenerates an HTML page with graphs (along with related JavaScript and css
files) in the specified target directory.

## Installing

- get the source tree:

```shell

$ git clone https://bitbucket.org/ack/launchpad-karma.git

```

- install the following dependencies:

  - Jinja2
  - launchpadlib

  This can be done via packages from your distribution or with `pip`:

```shell

$ cd launchpad-karma
$ pip install -R requirements.txt

```

## Setting it up


- copy `launchpad-karma.ini.template` to `launchpad-karma.ini` and edit it
  setting the `user` key to your launchpad username.  The target directory for
  graphs and and the (maximum) number of months to plot can also be changed.


- edit your crontab:

```shell

$ crontab -e

```

  by adding something like this (which runs the script at 23:30 every day):

```
# m h  dom mon dow   command
30 23 * * * /home/ack/launchpad-karma/launchpad-karma
```
